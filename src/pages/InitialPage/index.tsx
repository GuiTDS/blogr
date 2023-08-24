import Menu from 'components/Menu';
import styles from './InitialPage.module.css';
import { ReactComponent as Graphic } from 'assets/images/illustration-editor-mobile.svg'
import { ReactComponent as Phones } from 'assets/images/illustration-phones.svg'
import classNames from 'classnames';
import PhoneImg from 'assets/images/illustration-phones.svg';
import Circles from 'assets/images/bg-pattern-circles.svg';
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

            <main>

                <h2 className={styles.title}>Designed for the future</h2>

                <Graphic width={410} className={styles.main__svg} />

                <div className={classNames({
                    [styles.card__content]: true,
                    [styles.card]: true,
                })}>
                    <h2>Introducing an extensible editor</h2>
                    <p>  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                        change the looks of a blog.
                    </p>
                </div>

                <div className={classNames({
                    [styles.card__content]: true,
                    [styles.card]: true,
                })}>
                    <h2> Robust content management</h2>
                    <p>
                        Flexible content management enables users to easily move through posts. Increase the usability of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>
                </div>


                <div className={classNames({
                    [styles[`content-background`]]: true,

                })}>
                    <img className={styles.circles} src={Circles} alt='fundo do card com conteúdo' />
                    <div className={styles.phones}>
                        <img src={PhoneImg} alt="Phone image" />
                    </div>
                    <div className={classNames({
                        [styles[`content-background__info`]]: true,
                    })}>
                        <h2>State of the Art Infrastructure</h2>
                        <p>
                            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>

                </div>






            </main>
        </>
    );
}

export default InitialPage;