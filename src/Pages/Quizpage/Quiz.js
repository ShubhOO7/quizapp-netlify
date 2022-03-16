import React from 'react';
import "./Quiz.css";
import { CircularProgress , Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Quiz({name , score , questions , setScore }) {
    const [currQuest, setCurrQuest] = useState(0);

    const navigate = useNavigate();


    // making array of 4 options
    const array = questions ? [  questions[currQuest].correct_answer , 
                    questions[currQuest].incorrect_answers[0],
                    questions[currQuest].incorrect_answers[1],
                    questions[currQuest].incorrect_answers[2]] : null ;


    //shuffle array of 4 options
    function shuffle(array) {
          array.sort(() => Math.random() - 0.5);
          }
    const k = questions ? shuffle(array) : null;

    questions ? console.log(questions[currQuest].correct_answer ) : console.log("NOT Found"); 

    function handleSubmit0(e){
        setScore((prev) =>{
            return array[0] === questions[currQuest].correct_answer ? prev + 1  : prev + 0;
        })
        setCurrQuest((prev) =>{return prev + 1});
        if(currQuest > 8){
         navigate("/result");
        }
        console.log(score);
    }
 
   
    function handleSubmit1(e){
     setScore((prev) =>{
         return array[1] === questions[currQuest].correct_answer ? prev + 1 : prev + 0;
     })
     setCurrQuest((prev) =>{return prev + 1});
     if(currQuest > 8){
         navigate("/result");
        }
     console.log(score);
    }
    function handleSubmit2(e){
     setScore((prev) =>{
         return array[2] === questions[currQuest].correct_answer ? prev + 1 : prev + 0;
     })
     setCurrQuest((prev) =>{return prev + 1});
     if(currQuest > 8){
         navigate("/result");
        }
     console.log(score);
     }
    function handleSubmit3(e){
     setScore((prev) =>{
         return array[3] === questions[currQuest].correct_answer ? prev + 1 : prev + 0;
     })
     setCurrQuest((prev) =>{return prev + 1});
     if(currQuest > 8){
         navigate("/result");
        }
     console.log(score);
    }
 



  return (

    <div className="quizhead">
       <div className="quizName">
           <h1>{name}</h1>
           <h3>Score : {score}</h3>
        </div>
        {
            questions ? (
            <>
            <div className="quiztitle">
            {questions[currQuest].question};
            </div>
            <div className="quizbutton">
              <Button variant="outlined" onClick={handleSubmit0} className="option">{array[0]}</Button>
              <Button variant="outlined" onClick={handleSubmit1} className="option">{array[1]}</Button>
            </div>
            <div className="quizbutton">
              <Button variant="outlined" onClick={handleSubmit2} className="option">{array[2]}</Button>
              <Button variant="outlined" onClick={handleSubmit3} className="option">{array[3]}</Button>
            </div>
            </>
            ): (
            <CircularProgress
              style={{ margin: 100 }}
              color="inherit"
              size={100}
              thickness={1}
            />
      )}
    </div>
  )


  
}

export default Quiz