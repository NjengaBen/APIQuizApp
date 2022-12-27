import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { QuizContext } from '../Helpers/Context'

function DataFetch() {
    const {results, setResults} = useContext(QuizContext)
    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10")
            .then(res=>{                
                setResults(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])
    // console.log(Object.values(question))
  return (
    <div className='data-fetch'>        
        <h2>Fetch Data</h2>        
        <ul>
            {
                results.map((value, index)=>
                    <li key={index}>{value.question}</li>                    
                )
            }
        </ul>
        
    </div>
  )
}

export default DataFetch