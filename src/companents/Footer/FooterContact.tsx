import {valueContact} from "../../utils/constants.ts";
import  {useEffect, useRef} from "react";

const FooterContact = () => {
    const refContact = useRef<(HTMLLIElement | null)[]>([]);

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