import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const About = () => {
    const { t, i18n } = useTranslation();
    const [currentBio, setCurrentBio] = useState('');

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

    return (

            <section className="about container" id="about">
                {/*<div className="container">*/}
                <h2 className="visually-hidden">block about author this website </h2>
                <div className="about-bio">
                    <img className="about-bio-image" src="/images/images-bio.png" alt="image-person"/>
                </div>
                <div className="about-content">
                    <h4 className="about-content-hint hint">{i18n.language === "ru" ? "Обо мне ":"About Me"}</h4>
                    <h2 className="about-content-title title">{i18n.language === "ru" ? "Кто я":"Who am I"}</h2>
                    <p className="about-content-text">
                        {currentBio}
                    </p>
                    {/*</div>*/}
                </div>
            </section>
    );
};

export default About;