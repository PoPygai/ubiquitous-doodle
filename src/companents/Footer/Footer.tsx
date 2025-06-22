import FooterContact from "./FooterContact.tsx";
import './style-footer.css'

const Footer = () => {
    return (
        <footer className="footer" id="connect">
            <h2 className="visually-hidden">contact menu</h2>
            <div className="hidden-block" ></div>
            <div className="container">
                <FooterContact/>
                <h3 className="footer-title">thank you for your attention</h3>
            </div>
            <div className="footer-copyright">
                &copy; 2025 David R
            </div>
        </footer>
    );
};

export default Footer;