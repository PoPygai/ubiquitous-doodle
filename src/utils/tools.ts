import React from "react";
import {quizInformation} from "./question.ts";

export const handlerClickMenu = (refItems: React.RefObject<(HTMLAnchorElement | null)[]>,
    refListMenu: React.RefObject<HTMLUListElement | null>) => {

    refItems.current?.forEach((item) => {
        item?.classList.remove("active");
    });
    localStorage.setItem("active-header-btn", "");

    if (refListMenu.current) {
        refListMenu.current.classList.toggle("disableMenu");
    }
};



export const handleDocumentClick = (e: MouseEvent,refMiniGameBlock: React.RefObject<HTMLLIElement | null>,refListMenu: React.RefObject<HTMLUListElement | null>) => {
    const target = e.target as Node;

    if (
        refMiniGameBlock.current &&
        !refMiniGameBlock.current.contains(target)
    ) {
        refListMenu.current?.classList.add("disableMenu");
    }
};


export const getCountQues = ()=>{
    const stored = localStorage.getItem("counter-question");
    const parsed = Number(stored);
    if (parsed && parsed <= quizInformation.length){
        return (parsed);
    }
    return 0;
}
export const getMaxCountQues = ()=>{
    const maxCount = localStorage.getItem("max-count-question");
    if(maxCount) return Number(maxCount);
    localStorage.setItem("max-count-question", "0")
    return -1 ;
}