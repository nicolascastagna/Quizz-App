import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { Difficulty, fetchQuizzQuestions, QuestionsState } from './utils/API';

type AnswerObject = {
  question: string;
  answer: string; 
  correct: boolean;
  correct_answer: string;
  incorrect: boolean;
  incorrect_answer: string;
}

const App: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [total, setTotal] = useState(10);

  console.log(questions);

  const startQuizz = async () => {
  
      setLoading(true);
      setGameOver(false);
      const newQuestions:any = await fetchQuizzQuestions(total, Difficulty.EASY);
     
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <main className="main">
      <h1>Quizz App</h1>
      {gameOver || userAnswers.length === total ? (
      <button className="start" onClick={startQuizz}>
        Start
      </button>
      ) : null}
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
