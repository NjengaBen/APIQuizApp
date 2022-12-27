import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'

function StartMenu() {
    const {setGameState} = useContext(QuizContext)
    const startQuiz = () =>{        
        setGameState("quizmenu")
    }
  return (
    <div className='startmenu'>
        <h2>Start a New Quiz</h2>
        <div className="btn">
            <button onClick={startQuiz}>Start</button>
        </div>
    </div>
  )
}

export default StartMenu