import React, {useState} from "react";
import Question from "./Question.tsx";

type Props = {
    counterQuestion: number;
    setCounterQuiz: (counterQuestion: number) => void;
}

const QuizList:React.FC<Props> = ({counterQuestion, setCounterQuiz}) => {
    const [wasAnswerTrue,setWasAnswerTrue] = useState<boolean>(false);

    return (
            <div className="quiz-wrapper">
                <div className="quiz-main">
                    <Question index={counterQuestion - 1} setWasAnswerTrue={setWasAnswerTrue}/>
                </div>
                <button disabled={counterQuestion === 1} className={`quiz-button back ${counterQuestion === 1 ?`button-disabled` :``}`} onClick={()=>setCounterQuiz(counterQuestion-1)}>Back!</button>
                <button disabled={!wasAnswerTrue} className={`quiz-button next ${wasAnswerTrue ? "" : 'button-disabled'}`} onClick={()=>setCounterQuiz(counterQuestion+1)}>Next!</button>
            </div>
    );
};

export default QuizList;