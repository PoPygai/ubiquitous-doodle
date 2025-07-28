import React, {useEffect, useRef} from "react";
import {handleDocumentClick, handlerClickMenu} from "../../utils/tools.ts";
import {useNavigate} from "react-router";
import { useTranslation } from 'react-i18next';
import type {HiddenHeaderValue} from "../../utils/types";


const NavBar:React.FC = () => {
    const refItems = useRef<(HTMLAnchorElement | null)[]>([]);
    const refListMenu = useRef<HTMLUListElement | null>(null);
    const refMiniGameBlock = useRef<HTMLLIElement | null>(null);
    const navigate = useNavigate();


    const { t  } = useTranslation();
    const valueHeaderBtns = t("valueHeaderBtns", { returnObjects: true }) as string[];
    const valueMenuBtns  = t("valueMenuBtns", { returnObjects: true }) as string[];
    const {headerHidden} = t("hidden", {returnObjects: true}) as HiddenHeaderValue ;

    // todo
    const valueHeaderBtnsENG = (t("valueHeaderBtns", { lng: "en", returnObjects: true })) as string[];
    const valueMenuBtnsENG  = t("valueMenuBtns", { lng: "en", returnObjects: true }) as string[];


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
                            href={"#" + valueHeaderBtnsENG[i].toLowerCase()}
                        >
                            {value}
                        </a>
                    </li>
                ))}
                <li className="header-menu-item mini-game"     ref={refMiniGameBlock} >
                    <a className="header-menu-link"  onClick={()=>handlerClickMenu(refItems,refListMenu)}>Mini-Games</a>
                    <h2 className="visually-hidden">{headerHidden.headerMenuMiniGame}</h2>
                    <ul ref={refListMenu} className="mini-game-list disableMenu">
                        {valueMenuBtns.map((value, i) => (
                            <li className="mini-game-item" key={i}>
                                <a href={`/${valueMenuBtnsENG[i].toLowerCase()}`}>{value}</a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;