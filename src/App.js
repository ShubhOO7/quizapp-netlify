import { useState } from 'react';
import { BrowserRouter , Routes  , Route} from 'react-router-dom';
import axios from 'axios';


import './App.css';


// Header and Footer
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routes
import Home from './Pages/Homepage/Home';
import Quiz from './Pages/Quizpage/Quiz';
import Result from './Pages/Resultpage/Result';




function App() {
    const [name , setName] = useState();
    const [score , setScore] = useState(0);
    const [questions , setQuestions] = useState();



    const fetchQuestions = async () => {
        const {data} = await axios.get('https://opentdb.com/api.php?amount=10&&type=multiple');
        setQuestions(data.results);
    }



  return (
      <BrowserRouter>
         <div className="App" style = {{backgroundImage : "url(./photo/theme2.svg)" }}>
         <Header/>

         
         <Routes>


         {/* Home Route */}
           <Route path="/" element={<Home
               name = {name}
               setName = {setName}
               fetchQuestions = {fetchQuestions}
           />} />


         {/* Quiz Route */}
           <Route path="/quiz" element={<Quiz
               name = {name}
               score={score}
               setScore = {setScore}
               questions={questions}
           />} />



         {/* Result Route */}
           <Route path="/result" element={<Result
               name = {name}
               score={score}
               questions = {questions}
           />} />




         </Routes>


         </div>
         <Footer/>
       </BrowserRouter>
    
  );
}

export default App;
