import styles from './Menu.module.css';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as Hamburguer } from 'assets/images/icon-hamburger.svg';
import { ReactComponent as Close } from 'assets/images/icon-close.svg'
import classNames from 'classnames';
import { useState } from 'react';
const Menu = () => {
    const [btnAtivo, setBtnAtivo] = useState(true);
    const [contentActive, setContentActive] = useState(false);

    function handleClick() {
        setBtnAtivo(!btnAtivo);
        setContentActive(!contentActive);
    }
    return (
        <nav>
            <Logo />
            <div className={styles.menu}>
                <div className={styles.menu__icons}>
                    <Hamburguer onClick={() => handleClick()} className={classNames({
                        [styles.menu__btn]: true,
                        [styles[`menu__btn-ativo`]]: btnAtivo
                    })} />
                    <Close onClick={() => handleClick()} className={classNames({
                        [styles.menu__btn]: true,
                        [styles[`menu__btn-ativo`]]: !btnAtivo
                    })} />
                </div>

                <div className={classNames({
                    [styles.menu__content]: true,
                    [styles[`menu__content-active`]]: contentActive
                })}>
                    <ul>
                        <li className={styles.dropdown}>
                            <a href="#" className={styles.dropdown__btn}>Product</a>
                            <div className={styles.dropdown__content}>
                                <a href="#">Overview</a>
                                <a href="#">Princing</a>
                                <a href="#">Marketplace</a>
                                <a href="#">Features</a>
                                <a href="#">Integrations</a>
                            </div>
                        </li>
                        <li className={styles.dropdown}>
                            <a href="#" className={styles.dropdown__btn}>Company</a>
                            <div className={styles.dropdown__content}>
                                <a href="#">About</a>
                                <a href="#">Team</a>
                                <a href="#">Blog</a>
                                <a href="#">Careers</a>
                            </div>
                        </li>
                        <li className={styles.dropdown}>
                            <a href="#" className={styles.dropdown__btn}>Connect</a>
                            <div className={styles.dropdown__content}>
                                <a href="#">Contact</a>
                                <a href="#">Newsletter</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.btns}>
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Menu;