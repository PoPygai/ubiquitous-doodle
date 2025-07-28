import { useTranslation } from 'react-i18next';
import {useEffect, useRef, useState} from 'react';

const About = () => {
    const { t, i18n } = useTranslation();
    const [currentBio, setCurrentBio] = useState('');
    const {aboutHidden} = t("hidden", {returnObjects: true}) as {aboutHidden:string};
    const refAbout = useRef<HTMLDivElement|null>(null);
    const [visible, setVisible] = useState<boolean>(false);


    // без этого текст при обновления страницы будет всегда en 
    useEffect(() => {
        setCurrentBio(t("textBio"));

        const handleLanguageChanged = () => {
            setCurrentBio(t("textBio"));
        };

        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [t, i18n]);

    useEffect(() => {

        if(!refAbout.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.7 }
        )
        observer.observe(refAbout.current);
        return () => observer.disconnect();

    }, []);

    return (

            <section ref={refAbout} className={`about container ${visible ? "visible" : ""}`} id="about">
                <h2 className="visually-hidden">{aboutHidden}</h2>
                <div className="about-bio">
                    <img className="about-bio-image" src="/images/images-bio.png" alt="image-person"/>
                </div>
                <div className={`about-content `} >
                    {/*todo*/}
                    <h4 className="about-content-hint hint">{i18n.language === "ru" ? "Обо мне ":"About Me"}</h4>
                    <h2 className="about-content-title title">{i18n.language === "ru" ? "Кто я":"Who am I"}</h2>
                    <p className="about-content-text">
                        {currentBio}
                    </p>
                </div>
            </section>
    );
};

export default About;