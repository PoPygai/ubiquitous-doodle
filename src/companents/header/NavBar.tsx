import {valueHeaderBtns, valueMenuBtns} from "../../utils/constants.ts";
import React, {useEffect, useRef} from "react";
import {handleDocumentClick, handlerClickMenu} from "../../utils/tools.ts";
import {useNavigate} from "react-router";

const NavBar:React.FC = () => {
    const refItems = useRef<(HTMLAnchorElement | null)[]>([]);
    const refListMenu = useRef<HTMLUListElement | null>(null);
    const refMiniGameBlock = useRef<HTMLLIElement | null>(null);
    const navigate = useNavigate();


    const handlerClick = (e: React.MouseEvent<HTMLAnchorElement>,refItems: React.RefObject<(HTMLAnchorElement | null)[]>) => {
        refItems.current.forEach((item) => {
            item!.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        const indexItem = refItems.current.findIndex(item => item === e.currentTarget);
        localStorage.setItem("active-header-btn",indexItem.toString());
        navigate("/");
    };

    useEffect(() => {

        const res = localStorage.getItem("active-header-btn");
        if(res){
            refItems.current[Number(res)]!.classList.add("active");
        }

        document.addEventListener("click", (e)=> handleDocumentClick(e,refMiniGameBlock,refListMenu));



        return () => {
            document.removeEventListener("click", (e)=> ()=> handleDocumentClick(e,refMiniGameBlock,refListMenu));
        };

    }, []);


    return (
        <nav className="header-menu">
            <ul className="header-menu-list">
                {valueHeaderBtns.map((value, i) => (
                    <li className="header-menu-item" key={i}>
                        <a
                            ref={(el) => {
                                refItems.current[i] = el;
                            }}
                            className="header-menu-link"
                            onClick={(e) => handlerClick(e,refItems)}
                            data-index={i}
                            href={"#" + value.toLowerCase()}
                        >
                            {value}
                        </a>
                    </li>
                ))}
                <li className="header-menu-item mini-game"     ref={refMiniGameBlock} >
                    <a className="header-menu-link"  onClick={()=>handlerClickMenu(refItems,refListMenu)}>Mini-Games</a>
                    <h2 className="visually-hidden">menu of mini game</h2>
                    <ul ref={refListMenu} className="mini-game-list disableMenu">
                        {valueMenuBtns.map((value, i) => (
                            <li className="mini-game-item" key={i}>
                                <a href={`/${value.toLowerCase()}`}>{value}</a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;