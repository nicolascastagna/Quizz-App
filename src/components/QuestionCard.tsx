import { AnswerObject} from "../App"
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string,
    answers: string[], 
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number,
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
    return (
        <Wrapper>
           <p className="number">
           {questionNumber} / {totalQuestions}
           </p>
           <p dangerouslySetInnerHTML={{ __html: question}} />
           <div className="list-answers">
            {answers.map((answer) => (    
                <ButtonWrapper
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                key={answer}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
           </div>
        </Wrapper>
    );
};

export default QuestionCard;