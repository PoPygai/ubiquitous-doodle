import NavBar from "./NavBar.tsx";
import HeaderActions from "./HeaderBtns.tsx";
import "./style-header.css";

const Header = () => {
    return (
        <header className="header">
            <h2 className="header-logo">
                David R
            </h2>
            <NavBar/>
            <HeaderActions/>
        </header>
    );
};

export default Header;