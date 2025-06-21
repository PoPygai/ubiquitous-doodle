import {createContext} from "react";

interface InterContext {
    themeLight : boolean;
    setThemeLight : (value: boolean) => void;
}

const defaultValueContext:InterContext = {
    themeLight:false,
    setThemeLight:()=>{},
}

export const contextTheme = createContext(defaultValueContext);

//      todo переделать для смены языка