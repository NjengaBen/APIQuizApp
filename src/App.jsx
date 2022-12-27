import React, {useState, useEffect} from 'react'
import { QuizContext } from './Helpers/Context'
import DataFetch from './Components/DataFetch'
import StartMenu from './Components/StartMenu'
import QuizMenu from './Components/QuizMenu'
import EndMenu from './Components/EndMenu'
import axios from 'axios'
import './App.css'


function App() {
  const [gameState, setGameState] = useState("startmenu")
  const [score, setScore] = useState(0)
  const [results, setResults] = useState([])
  useEffect(()=>{
    axios.get("https://opentdb.com/api.php?amount=10")
        .then(res=>{                
            setResults(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
}, [])
  return (
    <div className="App">      
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore, results, setResults }}>
          {gameState== "startmenu" && <StartMenu/>}
          {gameState== "quizmenu" && <QuizMenu/>}
          {gameState== "endmenu" && <EndMenu/>}
        </QuizContext.Provider>
    </div>
  )
}

export default App
