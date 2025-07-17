import "./style-quiz.css";
import QuizList from "./QuizList.tsx";
import {useState} from "react";
import {quizInformation} from "../../utils/question.ts";



const Quiz = () => {
    const [counterQuestion, setCounterQuiz] = useState<number>(1);

    return (
        <section className="quiz">
            <header className="quiz-header">
                <h4 className="quiz-counter">
                    {counterQuestion}/52
                </h4>
                <h2 className="quiz-title">
                    {counterQuestion}. {quizInformation[counterQuestion-1].question}
                </h2>
                <h3 className="quiz-timer">
                    <time>10:00</time>
                </h3>
            </header>
            <QuizList counterQuestion={counterQuestion} setCounterQuiz={setCounterQuiz}/>
        </section>
    );
};

export default Quiz;