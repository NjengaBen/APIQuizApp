import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'

function EndMenu() {
    const {score, setScore, setGameState, results} = useContext(QuizContext)
    const playAgain = () =>{
        setScore(0)
        setGameState("startmenu")
    }
  return (
    <div className='endmenu'>
        <h2>End of the Quiz</h2>
        <p>Your score is {score} out of {results.length}</p>
        <div className="retry">
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default EndMenu