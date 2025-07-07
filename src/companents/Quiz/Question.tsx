import React, {useEffect, useRef} from "react";
import {quizInformation} from "../../utils/constants.ts";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props ={
    index : number;
    setWasAnswerTrue: (bool : boolean) => void;
}

const Question:React.FC<Props> = ({index,setWasAnswerTrue}) => {
    const refItems = useRef<(HTMLLIElement | null)[]>([]);


    useEffect(() => {
        refItems.current.forEach(el => {
            el?.classList.remove("true-answer");
            el?.classList.remove("false-answer");
        });
        setWasAnswerTrue(false)
    }, [index]);


    //todo
    const handleClick =  (e:React.MouseEvent<HTMLLIElement>)=>{
        const answer = e.currentTarget.dataset.answer;
        const trueAnswer = Object.keys(quizInformation[index].trueAnswer)[0];
        if(trueAnswer === answer){
            e.currentTarget.classList.add("true-answer");
            setWasAnswerTrue(true);
        }else{
            e.currentTarget.classList.add("false-answer");
        }
    }

    return (
        <>
            <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers customStyle={{ paddingInline: "15px", margin : "0", fontSize:"clamp(12px,1.2vw,24px)",}} className="quiz-question">
                {quizInformation[index].task}
            </SyntaxHighlighter>

            <ul className="quiz-list">
                {
                    Object.entries(quizInformation[index].answers).map((answer, i) => {
                        return <li className="quiz-item "
                                   ref={(el) => {
                                       refItems.current[i] = el;
                                   }}
                                   key={i}
                                   onClick={(e)=> handleClick(e)}
                                   data-answer={answer[0]}
                        >{answer[0]}: {answer[1]}</li>;
                    })
                }
            </ul>
        </>
    );
};

export default Question;