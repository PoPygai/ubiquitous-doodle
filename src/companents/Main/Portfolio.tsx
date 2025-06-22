import {valuePortfolio} from "../../utils/constants.ts";
import { useEffect, useRef, useState} from "react";

const Portfolio = () => {
    const refList = useRef<HTMLUListElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

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
        <section className="portfolio ">
            <h2 className="visually-hidden">portfolio</h2>
            <div className="hidden-block" id="portfolio"></div>

            <h3 className="portfolio-title " >Portfolio:</h3>
            <div className="portfolio-container">
                <ul  ref={refList}
                     className={`portfolio-list ${visible ? "visible" : ""}`}>
                    {
                        valuePortfolio.map((item, i) => (
                            <li className="portfolio-item" key={i}>
                                <a href={item.href} className="portfolio-link">{item.title} </a>
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