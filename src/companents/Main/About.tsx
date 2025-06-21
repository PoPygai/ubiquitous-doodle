import {textBio} from "../../utils/constants.ts";


const About = () => {
    return (
        <section className="about container">
            <div className="hidden-block" id="about"></div>
            {/*<div className="container">*/}
                <h2 className="visually-hidden">block about author this website </h2>
                <div className="about-bio">
                    <img className="about-bio-image" src="../../../public/images/images-bio.png" alt="image-person" />
                </div>
                <div className="about-content">
                    <h4 className="about-content-hint hint" >About Me</h4>
                    <h2 className="about-content-title title">Who am I</h2>
                    <p className="about-content-text">
                        {textBio}
                    </p>
                {/*</div>*/}
            </div>
        </section>
    );
};

export default About;