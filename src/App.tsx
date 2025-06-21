
import './App.css'
import Header from "./companents/header/Header.tsx";
import Main from "./companents/Main/Main.tsx";
import Footer from "./companents/Footer/Footer.tsx";
// import {useState} from "react";
// import {contextTheme} from "./context/context.ts";

function App() {
    // const [themeLight, setThemeLight] = useState(false);

    return (
        // <contextTheme.Provider value={{ themeLight, setThemeLight }}>
        // </contextTheme.Provider>
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );

}

export default App
