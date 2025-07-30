import "./style-quiz.css";
import QuizList from "./QuizList.tsx";
import {useEffect, useState} from "react";
import {quizInformation} from "../../utils/question.ts";
import {getCountQues, getMaxCountQues} from "../../utils/tools.ts";



const Quiz = () => {
    const [counterQuestion, setCounterQuiz] = useState<number>(getCountQues());
    const [maxCountQuestion, setMaxCountQuiz] = useState<number>(getMaxCountQues());


    useEffect(() => {
        localStorage.setItem("counter-question", String(counterQuestion));

    },[counterQuestion]);

    return (
        <section className="quiz">
            <header className="quiz-header">
                <h4 className="quiz-counter">
                    {counterQuestion+1}/52
                </h4>
                <h2 className="quiz-title">
                    {counterQuestion+1}. {quizInformation[counterQuestion ].question}
                </h2>
                <h3 className="quiz-timer">
                    <time>10:00</time>
                </h3>
            </header>
            <QuizList counterQuestion={counterQuestion} setCounterQuiz={setCounterQuiz}
                      maxCountQuestion = {maxCountQuestion}
                      setMaxCountQuiz={setMaxCountQuiz}/>


        </section>
    );
};

export default Quiz;