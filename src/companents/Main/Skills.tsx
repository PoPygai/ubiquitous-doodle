import {valueCardSkills} from "../../utils/constants.ts";
import {useEffect, useRef, useState} from "react";

const Skills = () => {
    const refSection = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
            { threshold: 0.3 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={refSection}
                 className={`skills start-animation ${isVisible ? "visible" : ""}`}
        >
            <div className="container">
                <div className="hidden-block" id="skills"></div>
                <h2 className="visually-hidden">Skills author this website</h2>
                <h4 className="skills-hint hint " >Skills</h4>
                <h2 className="skills-title title">What Can I Do</h2>
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