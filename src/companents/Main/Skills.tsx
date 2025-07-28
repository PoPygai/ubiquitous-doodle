import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import type {CardSkillsItem } from "../../utils/types";

const Skills = () => {
    const refSection = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const {t, i18n} = useTranslation();
    const valueCardSkills  = t("valueCardSkills",{ returnObjects: true }) as CardSkillsItem[];
    const {skillsHidden} = t("hidden", {returnObjects: true}) as {skillsHidden:string};

    useEffect(() => {
        const section = refSection.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={refSection}
                 className={`skills start-animation ${isVisible ? "visible" : ""}`}
                 id="skills"
        >
            <div className="container">
                {/*todo   */}
                <h2 className="visually-hidden">{skillsHidden}</h2>
                <h4 className="skills-hint hint " >{i18n.language === "ru" ?"Навыки" : "Skills"}</h4>
                <h2 className="skills-title title">{i18n.language === "ru" ?"Что я могу" : "What Can I Do"}</h2>
                <div className="skills-container">
                    <ul className="skills-list ">
                        {
                            valueCardSkills.map((skill, i) => (
                                <li className="skills-item" key={i}>
                                    <h3 className="skills-item-title">{skill.title}</h3>
                                    <p className="skills-item-description">{skill.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;