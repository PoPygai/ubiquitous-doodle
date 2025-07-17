import  {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import type {ContactItem} from "../../utils/types";

const FooterContact = () => {
    const refContact = useRef<(HTMLLIElement | null)[]>([]);

    const { t } = useTranslation();
    const valueContact = t("valueContact", { returnObjects: true }) as ContactItem[] ;

    useEffect(() => {
        refContact.current.forEach((item) => {
            if(item){
                const icon = item.getAttribute("data-img-footer");
                if (icon) {
                    item.style.setProperty("--footer-icon", `url(${icon})`);
                }
            }
        });
    }, [])

    return (
            <ul className={"footer-list"}>
                {
                    valueContact.map((item, index) => (
                        <li ref={(el) => {refContact.current[index] = el;}}
                            className="footer-item" key={index} data-img-footer={item.icon}>
                            <a className="footer-link" href={item.href} target="_blank">{item.topic}</a>
                        </li>
                    ))
                }
            </ul>
    );
};

export default FooterContact;