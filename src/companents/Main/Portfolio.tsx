import {valuePortfolio} from "../../utils/constants.ts";

const Portfolio = () => {
    valuePortfolio.map(item=>{
        console.log(Object.values(item));
    })
    console.log(valuePortfolio);


    return (
        <section className="portfolio">
            <h2 className="visually-hidden">portfolio</h2>
            <div className="hidden-block" id="portfolio"></div>

            <h3 className="portfolio-title " >Portfolio:</h3>
            <div className="portfolio-container">
                <ul className="portfolio-list">
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