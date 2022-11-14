import { useState } from "react";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, fetchQuizzQuestions, QuestionsState } from './utils/API';
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const total = 10;

const App: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

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
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if correct
      if (correct) setScore((prev) => prev +1);
      // Save score in array
      const answerObject:any = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move next question, if not last question
    const nextQuestion = number +1;
    if (nextQuestion === total) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <div className="css-bg"></div>
      <h1 onClick={() =>
          window.location.replace("/")
        }>Quizz App</h1>
      {gameOver || userAnswers.length === total ? (
      <button className="start" onClick={startQuizz}>
        Start
      </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
     {loading && <span className="loader"></span>} 
      {!loading && !gameOver && (
      <QuestionCard 
      questionNumber={number + 1}
      totalQuestions={total}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      />
      )}
      <div className="container-button">
      {!gameOver && !loading ? (
        <button className="restart next-question" onClick={() =>
          window.location.replace("/")
        }>Restart</button>
      ): null}
      {!gameOver && !loading && userAnswers.length === number +1 && number !== total -1 ? (
      <button className="next-question" onClick={nextQuestion}>
        Next Question
      </button>
      ) : null}
      </div>
    </Wrapper>
    </>
  );
}

export default App;
