import React from "react";
import Task from "./Task.tsx";
import type {Tasks} from "../../utils/types";

type Props = {
    tasks: Tasks[];
    setTasks: (tasks: Tasks[]) => void;
}



const MainTodoList: React.FC<Props> = ({tasks,setTasks}) => {


    const taskRemove = (index: number) => {
        const temp = tasks.slice();
        temp.splice(index, 1);
        setTasks(temp);

        localStorage.setItem("tasks", JSON.stringify(temp));

    }

    const taskEdit = (index: number, newText: string) => {
        const temp = tasks.slice();
        temp[index].title = newText;
        setTasks(temp);

        localStorage.setItem("tasks", JSON.stringify(temp));
    }
    const changeStatusTask = (index: number) => {
        const temp = tasks.slice();
        console.log(temp[index].taskDone,"before")
        temp[index].taskDone = !temp[index].taskDone;
        setTasks(temp);
        localStorage.setItem("tasks", JSON.stringify(temp));

        console.log(temp[index].taskDone,"after")

    }


    return (
        <section className="todolist-wrapper container">
            {
                tasks.map((task, i) => (
                    <Task task={task} deleteTask={taskRemove} index={i} updateTask={taskEdit} changeStatusTask={changeStatusTask} key={i} />
                ))
            }
        </section>
    );
};
export default MainTodoList;