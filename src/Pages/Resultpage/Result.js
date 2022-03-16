import React from 'react';
import "./Result.css";
function Result({name , score ,questions}) {
  return (
    <div className="resulthead">
        <div className="result"> Result</div>
        <div className="container">
           <div className="values">
              <h1 className="name ">{name}</h1>
              <h2 className="name ">Score : {score}</h2>
           </div>
           <div className="answers">
                <h3>Correct Answers</h3>
                <ul >
                  {questions.map((ans , idx)=>(
                     <li key = {idx} > {ans.correct_answer} </li>
                   ))}
                </ul>
           </div>
        </div>
        
    </div>
  )
}

export default Result