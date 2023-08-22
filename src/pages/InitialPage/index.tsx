import Menu from 'components/Menu';
import styles from './InitialPage.module.css';
import { ReactComponent as Graphic } from 'assets/images/illustration-editor-mobile.svg'
import classNames from 'classnames';

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
                
                <Graphic width={410} className={styles.main__svg}/>

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
            </main>
        </>

    );
}

export default InitialPage;