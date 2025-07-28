import React, { useState} from "react";
import type {Tasks, TodoListValue} from "../../utils/types";
import {useTranslation} from "react-i18next";

type Props = {
    tasks: Tasks[];
    setTasks: (tasks: Tasks[]) => void;
}



const HeaderTodoList: React.FC<Props> = ({ tasks, setTasks }) => {
    const [inputValue, setInputValue] = useState("");

    const {t} = useTranslation();
    const information = t("todolist",{ returnObjects: true }) as TodoListValue;
    const {todolistFormHidden} = t("hidden", {returnObjects: true}) as {todolistFormHidden:string} ;



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputValue.trim()) {
            const newTasks = [...tasks, { title: inputValue.trim(), taskDone: false }];
            setTasks(newTasks);
            setInputValue("");
            localStorage.setItem("tasks", JSON.stringify(newTasks));
        }
    };


    return (
        <header className="todolist-header">
            <h2 className="todolist-header-title">{information.title}</h2>
            <form onSubmit={handleSubmit} className="todolist-header-form">
                <label className="visually-hidden" htmlFor="taks">{todolistFormHidden}</label>
                <input
                    type="text"
                    id="taks"
                    placeholder={information.placeholder}
                    name="taks"
                    className="todolist-header-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="todolist-header-button" type="submit">
                    {information.button}
                </button>
            </form>
        </header>
    );
};


export default HeaderTodoList;