import Menu from 'components/Menu';
import styles from './InitialPage.module.css';

const InitialPage = () => {
    return (
        <>
            <div className={styles.header}>
                <Menu />
                <div className={styles.header__info}>
                    <h2>A modern publishing platform</h2>    
                    <p>Grow your audience and build your online brand</p>
                </div>
                <div className={styles.header__btns}>
                    <button>Start for free</button>
                    <button>Learn More</button>
                </div>
                
            </div>

        </>

    );
}

export default InitialPage;