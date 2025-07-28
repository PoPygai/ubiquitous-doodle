import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import type {WelComeValue} from "../../utils/types";

const Welcome = () => {

    const { t } = useTranslation();
    const informations  = t("Welcome",{ returnObjects: true }) as WelComeValue;
    const refAnimation = useRef<HTMLDivElement|null>(null);

    const texts =informations.animation;
    const [text, setText] = useState("");
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!refAnimation.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(refAnimation.current);

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        if (!visible) return;

        let timeout;

        if (text.length === texts.length) {
            setIsDeleting(true);
        }

        if (!text.length) {
            setIsDeleting(false);
        }

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText(texts.substring(0, letterIndex - 1));
                setLetterIndex(letterIndex - 1);
            }, 120);
        } else {
            timeout = setTimeout(() => {
                setText(texts.substring(0, letterIndex + 1));
                setLetterIndex(letterIndex + 1);
            }, 220);
        }

        return () => clearTimeout(timeout);
    }, [letterIndex, isDeleting, visible]);



    return (
        <section className="welcome" id="home">
            <div className="welcome-container container">
                <div className="welcome-content">
                    <h2 className="welcome-title">
                        {informations.title.split(' ')[0]} <br/> {informations.title.split(' ')[1]}
                    </h2>

                    <p className="welcome-description animation" ref={refAnimation}>
                        {text}
                    </p>
                    <p className="welcome-description">{informations.description}</p>
                    <button className="welcome-resume">{informations.button}</button>
                </div>
                <img className="welcome-image" src="../../../public/images/images-bio.png" alt="photo of own website"/>

            </div>
        </section>
    );
};

export default Welcome;