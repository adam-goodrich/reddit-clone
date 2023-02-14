import styles from 'Header.module.scss';

const Header = () => {

    return (
        <header>
        <div className={styles.header__logo}>
            <button className={styles.logo}>:)__reddit</button>
        </div>
        <input type="text" placeholder="Search Reddit" className={styles.search_bar}/>
        <div className={styles.header__right}>
            <button>Get App</button>
            <button>Log In</button>
            <button className={styles.profile}>:)</button>
        </div>
        </header>
    );
};
export default Header;