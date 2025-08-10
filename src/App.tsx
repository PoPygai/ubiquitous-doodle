
import './App.css'
import Header from "./companents/header/Header.tsx";
import Main from "./companents/Main/Main.tsx";
import Footer from "./companents/Footer/Footer.tsx";
import {Route, Routes} from "react-router";
import ToDoList from "./companents/ToDoList/ToDoList.tsx";
import Quiz from "./companents/Quiz/Quiz.tsx";
import ErrorPath from "./companents/ErrorPath.tsx";




function App() {

    return (

        <>
            <Header />

            <Routes>
                <Route  path="/"  element={<Main />}/>
                <Route path="todo-list"  element={<ToDoList />}/>
                <Route path="quiz"  element={<Quiz />}/>
                <Route path="*" element={<ErrorPath/>}/>
            </Routes>

            <Footer/>
        </>
    );

}

export default App
