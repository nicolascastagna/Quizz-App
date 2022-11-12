import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import {Difficulty, fetchQuizzQuestions } from "./utils/API"

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [total, setTotal] = useState(10);

  console.log(fetchQuizzQuestions(total, Difficulty.EASY));
  

  const startQuizz = async () => {
    
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <main className="main">
      <h1>Quizz App</h1>
      <button className="start" onClick={startQuizz}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
      questionNumber={number + 1}
      totalQuestions={total}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className="next-question" onClick={nextQuestion}>
        Next Question
      </button>
    </main>
  );
}

export default App;
