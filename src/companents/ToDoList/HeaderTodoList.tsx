import React, { useState} from "react";
import type {Tasks} from "../../utils/types";

type Props = {
    tasks: Tasks[];
    setTasks: (tasks: Tasks[]) => void;
}



const HeaderTodoList: React.FC<Props> = ({ tasks, setTasks }) => {
    const [inputValue, setInputValue] = useState("");

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
            <h2 className="todolist-header-title">ToDoList</h2>
            <form onSubmit={handleSubmit} className="todolist-header-form">
                <label className="visually-hidden" htmlFor="taks">Write New Task</label>
                <input
                    type="text"
                    id="taks"
                    placeholder="Write New Task"
                    name="taks"
                    className="todolist-header-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="todolist-header-button" type="submit">
                    Add New Task
                </button>
            </form>
        </header>
    );
};


export default HeaderTodoList;