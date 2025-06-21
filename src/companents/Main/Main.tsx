import Skills from "./Skills.tsx";
import Portfolio from "./Portfolio.tsx";
import About from "./About.tsx";
import "./style-main.css"


const Main = () => {
    return (
        <main id="main">
            <About/>
            <Skills/>
            <Portfolio/>
        </main>
    );
};

export default Main;