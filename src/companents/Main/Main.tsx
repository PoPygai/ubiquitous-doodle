import Skills from "./Skills.tsx";
import Portfolio from "./Portfolio.tsx";
import About from "./About.tsx";
import "./style-main.css"
import {useEffect} from "react";


const Main = () => {


    useEffect(() => {
        const savedScroll = localStorage.getItem("scroll-position");
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll));
        }

        const handleScroll = () => {
            localStorage.setItem("scroll-position", window.scrollY.toString());
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <main id="main">
            <About/>
            <Skills/>
            <Portfolio/>
        </main>
    );
};

export default Main;