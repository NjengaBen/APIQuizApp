import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'

function QuizMenu() {
    const {results, setResults, score, setScore, setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrentQuestion] = useState(0)
    const getAnswers = [results[currQuestion].correct_answer, ...results[currQuestion].incorrect_answers]
    const getRandomAnswers = getAnswers.sort((a,b) => 0.5 - Math.random())    
    const answers = getRandomAnswers
    const [optionChosen, setOptionChosen] = useState("")  
    const nextQuiz = ()=>{
        if(optionChosen == results[currQuestion].correct_answer){
            setScore(score + 1)
        }
        setCurrentQuestion(currQuestion + 1)
    }
    const finishQuiz = () => {
        if(optionChosen == results[currQuestion].correct_answer){
            setScore(score + 1)
        }
        setGameState("endmenu")
    }
    console.log(results && results)
  return (
    <div className='quizmenu'>        
        <h2>{results && results[currQuestion].question}</h2>
        <div className="options">            
            {answers.map((answer, index)=>{                
                return(
                    <button onClick={()=>{setOptionChosen(optionChosen)}} key={index}>{answer}</button>
                )                
            })}
        </div>
        <div className="next">
            {currQuestion === results.length-1 ?
            (<button onClick={finishQuiz}>Finish</button>) :
            (<button onClick={nextQuiz}>Next</button>)
            }            
        </div>
    </div>
  )
}

export default QuizMenu