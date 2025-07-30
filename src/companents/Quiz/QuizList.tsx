import React, { useState} from "react";
import Question from "./Question.tsx";

type Props = {
    counterQuestion: number;
    setCounterQuiz: (counterQuestion: number) => void;
    maxCountQuestion:number
    setMaxCountQuiz: (counterQuestion: number) => void;
}

const QuizList:React.FC<Props> = ({counterQuestion, setCounterQuiz,maxCountQuestion,setMaxCountQuiz}) => {
    const [wasAnswerTrue,setWasAnswerTrue] = useState<boolean>(false);
    const [clearCounter,setClearCounter] = useState<boolean>(false);

    return (
            <div className="quiz-wrapper">
                <div className="quiz-main">
                    <Question index={counterQuestion} setWasAnswerTrue={setWasAnswerTrue}
                              clearCounter={clearCounter} setClearCounter={setClearCounter} maxCountQuestion={maxCountQuestion}
                              setMaxCountQuiz={setMaxCountQuiz}
                    />
                </div>
                <button disabled={counterQuestion === 0} className={`quiz-button back ${counterQuestion === 0 ?`button-disabled` :``}`}
                        onClick={()=>setCounterQuiz(counterQuestion-1)}>Back!</button>
                <button disabled={!wasAnswerTrue} className={`quiz-button next ${wasAnswerTrue ? "" : 'button-disabled'}`}
                        onClick={()=>setCounterQuiz(counterQuestion+1)}>Next!</button>

                <button className="quiz-reset" onClick={()=> {
                    setClearCounter(true)
                    setCounterQuiz(0)
                    setMaxCountQuiz(0)
                    localStorage.setItem("max-count-question","-1");
                }}>
                    <img className="quiz-reset--image" src="../../../public/icons/undo.png" alt="button reset task to 1 "/>
                </button>
            </div>
    );
};

export default QuizList;