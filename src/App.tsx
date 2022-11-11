const App = () => {

  const startQuizz = async () => {
    
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      <button className="start" onClick={startQuizz}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions</p>
    </div>
  );
}

export default App;
