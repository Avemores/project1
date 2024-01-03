import React from "react";
import "./Catalog.css";

const CatalogItem = ({ item, addToBasket }) => (
  <div className="catalog__item-wrapper">
    <div key={item.id}>
      <img className="catalog__item-img" src={item.image} />
      <p className="catalog__item-price">{item.price} ₴ </p>
      <h3 className="catalog__item-name">{item.name}</h3>
      <p className="catalog__item-weight">{item.weight}</p>
      <button onClick={() => addToBasket(item)} className="catalog__item-btn">
        Добавить
      </button>
    </div>
  </div>
);

const CatalogPage = ({ title, data, addToBasket }) => (
  <div className="catalog__wrapper">
    <h2 className="catalog__page-title">{title}</h2>
    {data.length === 0 ? (
      <p className="catalog__page-empty">К сожалению, ассортимент пуст...</p>
    ) : (
      <div className="catalog__page">
        {data.map((item) => (
          <CatalogItem key={item.id} item={item} addToBasket={addToBasket} />
        ))}
      </div>
    )}
  </div>
);

export default CatalogPage;
