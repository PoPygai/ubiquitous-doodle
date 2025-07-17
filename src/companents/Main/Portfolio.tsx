import { useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import type {PortfolioItem} from "../../utils/types";

const Portfolio = () => {
    const refList = useRef<HTMLUListElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    const {t,i18n} = useTranslation();
    const valuePortfolio  = t("valuePortfolio",{ returnObjects: true }) as PortfolioItem[];

    useEffect(() => {

        if(!refList.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.6 }
        )
        observer.observe(refList.current);
        return () => observer.disconnect();

    },[])


    return (
        <section className="portfolio" id="portfolio">
            <h2 className="visually-hidden">portfolio</h2>

            <h3 className="portfolio-title " >{i18n.language === "ru" ? "Портфолио":"Portfolio"}:</h3>
            <div className="portfolio-container">
                <ul  ref={refList}
                     className={`portfolio-list ${visible ? "visible" : ""}`}>
                    {
                        valuePortfolio.map((item, i) => (
                            <li className="portfolio-item" key={i}>
                                <a href={item.href} className="portfolio-link" target="_blank">{item.title}</a>
                                <span>{item.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Portfolio;