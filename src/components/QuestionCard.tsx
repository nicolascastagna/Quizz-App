type Props = {
    question: string,
    answers: string[], 
    callback: any,
    userAnswer: any,
    questionNumber: number,
    totalQuestions: number,
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
    return (
        <section className="question-card">
           <p className="number">
           {questionNumber} / {totalQuestions}
           </p>
           <p dangerouslySetInnerHTML={{ __html: question}} />
           <div className="list-answers">
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}
           </div>
        </section>
    );
};

export default QuestionCard;