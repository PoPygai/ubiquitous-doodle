import React from "react";

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