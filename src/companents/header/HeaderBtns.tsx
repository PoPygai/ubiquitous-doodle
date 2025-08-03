import * as React from "react";
import { useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import type {HiddenHeaderValue} from "../../utils/types";

const HeaderActions:React.FC = () => {
    const rootElm = document.getElementById('root');
    const [checked, setChecked] = useState<boolean>(false);

    const { t ,i18n } = useTranslation();
    const {headerHidden} = t("hidden", {returnObjects: true}) as HiddenHeaderValue ;

    const handlerClick = () => {
        const toggled = rootElm!.classList.toggle('light-style');
        localStorage.setItem('light-style', toggled.toString());
        if(checked) setChecked(false)
        else setChecked(true);
    };

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    useEffect(() => {
        const style = localStorage.getItem('light-style');
        if (style === 'true') {
            rootElm!.classList.add('light-style');
            setChecked(true);
        } else {
            rootElm!.classList.remove('light-style');
            setChecked(false);

        }

        const language = localStorage.getItem('language');
        if (language) {
            i18n.changeLanguage(language)
        }

    }, [])

    return (
        <div className="header-actions">
            <form className={"header-actions-lang"} action="#">
                <label className="visually-hidden" htmlFor="translate">{headerHidden.headerTranslate}</label>
                <select
                    id={"translate"}
                    value={i18n.language}
                    onChange={changeLanguage}
                    className="language-selector"
                >
                    <option value="en">ENG</option>
                    <option value="ru">RU</option>
                    <option value="heb">HEB</option>
                </select>
            </form>
            <div className="header-actions-switch">
                <h2 className="visually-hidden">{headerHidden.headerTheme}</h2>
                <input className={"header-actions-input"} type="checkbox" checked={checked} onChange={handlerClick}
                       id="darkmode-toggle"/>
                <label className="header-actions-slider" htmlFor="darkmode-toggle" role="switch"
                       aria-checked={checked}
                       aria-label="Toggle dark mode"></label>
            </div>


        </div>
    );
};

export default HeaderActions;
