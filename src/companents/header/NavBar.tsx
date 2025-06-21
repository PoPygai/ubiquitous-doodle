import {valueHeaderBtns} from "../../utils/constants.ts";
import React, {useEffect, useRef} from "react";

const NavBar:React.FC = () => {
    const refItems = useRef<(HTMLAnchorElement | null)[]>([]);

    const handlerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        refItems.current.forEach((item) => {
            item!.classList.remove("active");
        })
        const indexItem = refItems.current.findIndex(item => item === e.currentTarget);
        e.currentTarget.classList.add("active");

        localStorage.setItem("active-header-btn",indexItem.toString());
    };

    useEffect(() => {

        const res = localStorage.getItem("active-header-btn");
        if(res){
            refItems.current[Number(res)]!.classList.add("active");
        }


    },[])

    return (
        <nav className="header-menu">
            <ul className="header-menu-list">
                {valueHeaderBtns.map((value, i) => (
                    <li className="header-menu-item" key={i}>
                        <a
                            ref={(el) => {refItems.current[i] = el;}}
                            className="header-menu-link"
                            onClick={handlerClick}
                            data-index={i}
                            href={"#" + value.toLowerCase()}
                        >
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;