import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import type {WelComeValue} from "../../utils/types";

const Welcome = () => {

    const { t } = useTranslation();
    const informations  = t("Welcome",{ returnObjects: true }) as WelComeValue;


    const texts =informations.animation;
    const [text, setText] = useState("");
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if(text.length === texts.length){
            setIsDeleting(true);
        }
        if(!text.length){
            setIsDeleting(false);
        }
        if(isDeleting){
            timeout = setTimeout(()=>{
                setText(texts.substring(0, letterIndex - 1));
                setLetterIndex(letterIndex - 1);
            },120)
        }else{
            timeout = setTimeout(()=>{
                setText(texts.substring(0, letterIndex + 1));
                setLetterIndex(letterIndex + 1);
            },220)
        }


        return () => clearTimeout(timeout);
    }, [letterIndex, isDeleting]);


    return (
        <section className="welcome" id="home">
            {/*<h2 className="visually-hidden"> TODO </h2>*/}
            <div className="welcome-container container">
                <div className="welcome-content">
                    <h2 className="welcome-title">
                        {informations.title.split(' ')[0]} <br/> {informations.title.split(' ')[1]}
                    </h2>

                    <p className="welcome-description animation">
                        {text}
                    </p>
                    <p className="welcome-description">{informations.description}</p>
                    <button className="welcome-resume">{informations.button}</button>
                </div>
                <img className="welcome-image" src="../../../public/images/images-bio.png" alt=""/>

            </div>
        </section>
    );
};

export default Welcome;