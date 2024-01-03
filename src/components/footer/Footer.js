import "./Footer.css";
import footerLogo from "./footerLogo.svg";
import phone from "./phone.svg";
import telega from "./telega.svg";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <img className="footer__logo" src={footerLogo} />
            <p>
              © YouMeal, 2023 <br /> Nasral Posral
            </p>
            <p></p>
          </div>
          <div className="footer__phone">
            <h3 className="footer__text">Номер для заказа</h3>
            <div className="footer__phone-number">
              <img src={phone} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
          <div className="footer__social">
            <h3 className="footer__text">Мы в соцсетях</h3>
            <div className="footer__social-link">
              <a href="https://web.telegram.org/">
                <img src={telega} />
              </a>
              <a href="https://web.telegram.org/">
                <img src={telega} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
