import React from 'react';
import './Home.css';
import {TextField , Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home({name, setName , fetchQuestions}) {
    const navigate = useNavigate();

    const handleClick = () => { 
        console.log("clicked");
    fetchQuestions();
    navigate("/quiz");
    }
  return (
    <div className="Homehead">
        <div className="details">
            <TextField
                 style= {{marginBottom : 25}}
                 label= "Enter Your Name "
                 variant = "outlined"
                 onChange={(e) => setName(e.target.value)}
            />
            <Button variant="contained" style = {{color : "#15524a" , background: "#fff"}} size="large" onClick = {handleClick} > Start Quiz</Button>
        </div>
        <img src="photo/quiz.svg" className= "quizPhoto" alt="QuizPicture"  />
    </div>
  )
}

export default Home