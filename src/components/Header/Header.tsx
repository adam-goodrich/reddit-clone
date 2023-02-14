import styles from './Header.module.scss';

const Header = () => {

    return (
      <header className={styles.container}>
        <div className={styles.header__logobox}>
            <button className={styles.logo}>:)__reddit</button>
        </div>
        <input type="text" placeholder="Search Reddit" className={styles.search_bar}/>
        <div className={styles.header__right}>
            <button className={styles.header__button}>Get App</button>
            <button className={styles.header__button}>Log In</button>
            <button className={styles.profile}>:)</button>
        </div>
      </header>
    );
};
export default Header;