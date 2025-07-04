
import "./style-todolist.css";
import HeaderTodoList from "./HeaderTodoList.tsx";
import {useEffect, useState} from "react";
import MainTodoList from "./MainTodoList.tsx";
import type {Tasks} from "../../utils/types";

const ToDoList = () => {
    const [tasks, setTasks] = useState<Tasks[]>([])

    useEffect(() => {
        const res = localStorage.getItem("tasks");
        if(!res) return
        setTasks(JSON.parse(res))
    }, []);



    return (
        <section className="todolist">
            <h2 className="visually-hidden">Todo-List</h2>
            <HeaderTodoList tasks={tasks} setTasks={setTasks}/>
            <MainTodoList tasks={tasks} setTasks={setTasks}/>
        </section>
    );
};

export default ToDoList;