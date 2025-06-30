import styles from "./ErrorPath.module.css"

const ErrorPath = () => {
    return (
        <div className={styles.alertError}>
            <h2 className={styles.alertErrorTitle}>404 error</h2>
            <p className={styles.alertErrorText}>page not found</p>
        </div>
    );
};

export default ErrorPath;