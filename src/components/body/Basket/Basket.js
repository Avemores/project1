import "./Basket.css";
import React from "react";
import { useState, useEffect } from "react";
import delivery from "./delivery.svg";

const Basket = ({
  basketItems,
  increaseQuantity,
  decreaseQuantity,
  basketCount,
}) => {
  const [isBasketVisible, setIsBasketVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Если ширина окна больше 1024, открываем корзину и запрещаем её закрывать
      setIsBasketVisible(window.innerWidth > 1024);
    };

    // Вызываем handleResize при загрузке страницы
    handleResize();

    // Добавление обработчика события при изменении размера окна
    window.addEventListener("resize", handleResize);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleBasketVisibility = () => {
    // Корзину можно открывать и закрывать только при ширине окна до 1024
    if (window.innerWidth <= 1024) {
      setIsBasketVisible(!isBasketVisible);
    }
  };
  const countUniqueItems = () => {
    return new Set(basketItems.map((item) => item.id)).size;
  };

  const shouldShowScroll = countUniqueItems() > 4;

  const calculateTotalPrice = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div className="basket__double-wrapper">
        <div className="basket__wrapper">
          <div className="basket__header" onClick={toggleBasketVisibility}>
            <h2 className="basket__name">Корзина</h2>
            <p className="basket__count">{basketCount}</p>
          </div>
          {isBasketVisible && (
            <div className="basket__order-wrapper">
              <div
                className={
                  shouldShowScroll ? "basketListWithScroll" : "basketList"
                }
              >
                {basketItems.map((item) => (
                  <div className="basket__item-wrapper" key={item.id}>
                    <img
                      className="basket__item-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="basket__item-description">
                      <p className="basket__item-name">{item.name}</p>
                      <p className="basket__item-weight">{item.weight}</p>
                      <p className="basket__item-price">{item.price}₴</p>
                    </div>

                    <div className="basket__item-btn">
                      <button onClick={() => decreaseQuantity(item)}>
                        {" "}
                        -{" "}
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item)}>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isBasketVisible && (
            <>
              <div className="basket__total">
                <p>Итого: {calculateTotalPrice()}₴</p>
              </div>
              <button
                className={`basket__order-btn ${
                  basketItems.length === 0 ? "disabled" : ""
                }`}
                disabled={basketItems.length === 0}
              >
                Оформить заказ
              </button>
            </>
          )}

          <div className="basket__footer">
            <img src={delivery} alt={delivery} />
            <p className="basket__footer-text">Бесплатная доставка</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
