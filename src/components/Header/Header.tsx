
const Header = () => {

    return (
        <header>
        <div className="header__logo">
            <button className="logo">:)__reddit</button>
        </div>
        <input type="text" placeholder="Search Reddit" className="search-bar"/>
        <div className="header__right">
            <button>Get App</button>
            <button>Log In</button>
            <button className="profile">:)</button>
        </div>
        </header>
    );
};
export default Header;