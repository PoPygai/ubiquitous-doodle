import styles from "./ErrorPath.module.css"
import {useTranslation} from "react-i18next";
import type {errorValues} from "../utils/types";

const ErrorPath = () => {
    const {t} = useTranslation()
    const errorValue = t("errorPage",{returnObjects:true}) as errorValues;

    return (
        <div className={styles.alertError}>
            <h2 className={styles.alertErrorTitle}>{errorValue.errorStatus}</h2>
            <p className={styles.alertErrorText}>{errorValue.errorMessage}</p>
        </div>
    );
};

export default ErrorPath;