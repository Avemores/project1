import "./Header.css";
import headerBurger from "./headerBurger.svg";
import headerLogo from "./headerLogo.svg";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="container__header">
        <div className="header__logo">
          <a href="#">
            <img src={headerLogo} />
          </a>
        </div>
        <div className="header__content">
          <img className="header__burger" src={headerBurger} />
          <div className="header__text">
            <h1 className="header__title">
              Только самые
              <p className="header__suptitle">сочные бургеры!</p>
            </h1>
            <p className="header__suptext">
              Бесплатная доставка от <span className="header__price">400₴</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
