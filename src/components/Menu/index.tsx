import styles from './Menu.module.css';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as Hamburguer } from 'assets/images/icon-hamburger.svg';
import { ReactComponent as Close } from 'assets/images/icon-close.svg'
import classNames from 'classnames';
import { useState } from 'react';
import { ReactComponent as ArrowDown } from 'assets/images/icon-arrow-dark.svg';
import { ReactComponent as ArrowDownLight } from 'assets/images/icon-arrow-light.svg';

const Menu = () => {
    const [btnAtivo, setBtnAtivo] = useState(true); /* hamburguer or close icon */
    const [menuContentActive, setMenuContentActive] = useState(false); /* content when the menu is open */
    const [dropdownActive, setDropdownActive] = useState({
        product: false,
        company: false,
        connect: false
    })

    function handleClickIcon() {
        setBtnAtivo(!btnAtivo);
        setMenuContentActive(!menuContentActive);
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setDropdownActive({
            ...dropdownActive,
            [evt.target.name]: value
        });
    }

    function deactivateDropdownHover(event: EventTarget & HTMLLIElement) {
        const value = event.title;
        setDropdownActive({
            ...dropdownActive,
            [value]: false
        })
    }

    function activateDropdownHover(event: EventTarget & HTMLLIElement) {
        const value = event.title;
        setDropdownActive({
            ...dropdownActive,
            [value]: true
        })
    }


    return (
        <nav>
            <Logo width={100} className={styles.logo} />
            <div className={styles.menu}>
                <div className={styles.menu__icons}>
                    <Hamburguer onClick={() => handleClickIcon()} className={classNames({
                        [styles.menu__btn]: true,
                        [styles[`menu__btn-ativo`]]: btnAtivo
                    })} />
                    <Close onClick={() => handleClickIcon()} className={classNames({
                        [styles.menu__btn]: true,
                        [styles[`menu__btn-ativo`]]: !btnAtivo
                    })} />
                </div>

                <div className={classNames({
                    [styles.menu__content]: true,
                    [styles[`menu__content-active`]]: menuContentActive,
                    [styles[`menu__content-desktop`]]: true
                })}>
                    <ul>
                        <li title='product' onMouseEnter={(event) => activateDropdownHover(event.currentTarget)} onMouseLeave={(event) => deactivateDropdownHover(event.currentTarget)}  className={classNames({
                            [styles.dropdown]: true,
                            [styles[`dropdown-active`]]: dropdownActive['product']
                        })}>
                            <label htmlFor="product">Product<input type='checkbox' id='product' name='product' onChange={(event) => handleChange(event)} /></label>
                            <ArrowDown className={styles.arrow} />
                            <ArrowDownLight className={styles.arrow__light} />
                            <div className={classNames({
                                [styles.dropdown__content]: true,
                                [styles[`dropdown__content-active`]]: dropdownActive['product']
                            })}>
                                <a href="#">Overview</a>
                                <a href="#">Princing</a>
                                <a href="#">Marketplace</a>
                                <a href="#">Features</a>
                                <a href="#">Integrations</a>
                            </div>
                        </li>
                        <li title='company' onMouseEnter={(event) => activateDropdownHover(event.currentTarget)} onMouseLeave={(event) => deactivateDropdownHover(event.currentTarget)}  className={classNames({
                            [styles.dropdown]: true,
                            [styles[`dropdown-active`]]: dropdownActive['company']
                        })}>
                            <label htmlFor="company">Company<input type='checkbox' id='company' name='company' onChange={(event) => handleChange(event)} /></label>
                            <ArrowDown className={styles.arrow} />
                            <ArrowDownLight />
                            <div className={classNames({
                                [styles.dropdown__content]: true,
                                [styles[`dropdown__content-active`]]: dropdownActive['company']
                            })}>
                                <a href="#">About</a>
                                <a href="#">Team</a>
                                <a href="#">Blog</a>
                                <a href="#">Careers</a>
                            </div>
                        </li>
                        <li title='connect' onMouseEnter={(event) => activateDropdownHover(event.currentTarget)} onMouseLeave={(event) => deactivateDropdownHover(event.currentTarget)} className={classNames({
                            [styles.dropdown]: true,
                            [styles[`dropdown-active`]]: dropdownActive['connect']
                        })}>
                            <label htmlFor="connect">Connect<input type='checkbox' id='connect' name='connect' onChange={(event) => handleChange(event)} /></label>
                            <ArrowDown className={styles.arrow} />
                            <ArrowDownLight className={styles.arrow__light} />
                            <div className={classNames({
                                [styles.dropdown__content]: true,
                                [styles[`dropdown__content-active`]]: dropdownActive['connect']
                            })}>
                                <a href="#">Contact</a>
                                <a href="#">Newsletter</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </li>
                    </ul>
                    <hr className={styles.divider}></hr>
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