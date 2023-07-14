import Menu from 'components/Menu';
import styles from './InitialPage.module.css';

const InitialPage = () => {
    return (
        <>
            <div className={styles.header}>
                <Menu />
            </div>

        </>

    );
}

export default InitialPage;