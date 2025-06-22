import * as React from "react";
import { useEffect, useState} from "react";

const HeaderActions:React.FC = () => {
    const rootElm = document.getElementById('root');
    const [checked, setChecked] = useState<boolean>(false);



    const handlerClick = () => {
        const toggled = rootElm!.classList.toggle('light-style');
        localStorage.setItem('light-style', toggled.toString());
        if(checked) setChecked(false)
        else setChecked(true);
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
    }, [])

    return (
        <div className="header-actions">
            <form className={"header-actions-lang"} action="#">
                <select>
                    <option value={"ENG"}>ENG</option>
                    <option value={"RU"}>RU</option>
                </select>
            </form>
            <div className="header-actions-switch">
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
