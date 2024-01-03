import {
  addToBasket,
  increaseQuantity,
  decreaseQuantity,
  handleCategoryChange,
} from "./Utils";

import React, { useState, useEffect } from "react";
import "./Body.css";

import Navigation from "../header/Navigation/Navigation";
import Bascket from "./Basket/Basket";

import BurgerCatalog from "./PageCatalog/PageBurger/BrugerCatalog";
import SnackCatalog from "./PageCatalog/PageSnack/SnackCatalog";
import HotDogCatalog from "./PageCatalog/PageHotDot/HotDogCatalog";
import ComboCatalog from "./PageCatalog/PageCombo/ComboCatalog";
import ShawarmaCatalog from "./PageCatalog/PageShawarma/ShawarmaCatalog";
import PizzaCatalog from "./PageCatalog/PagePizza/PizzaCatalog";
import WokCatalog from "./PageCatalog/PageWok/WokCatalog";
import DesertCatalog from "./PageCatalog/PageDesert/DesertCatalog";
import SauceCatalog from "./PageCatalog/PageSauce/SauceCatalog";

const Body = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");
  const [basket, setBasket] = useState([]);
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    // Обновляем общее количество товаров при изменении корзины
    const newBasketCount = basket.reduce((acc, item) => acc + item.quantity, 0);
    setBasketCount(newBasketCount);
  }, [basket]);

  return (
    <>
      <div className="container">
        <Navigation
          onCategoryChange={(category) =>
            handleCategoryChange(setActiveCategory, category)
          }
        />
        <div className="body__wrapper">
          <Bascket
            basketItems={basket}
            increaseQuantity={(item) =>
              increaseQuantity(basket, setBasket, item)
            }
            decreaseQuantity={(item) =>
              decreaseQuantity(basket, setBasket, item)
            }
            basketCount={basketCount}
          />
          {activeCategory === "burgers" && (
            <BurgerCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "snacks" && (
            <SnackCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "hotdog" && (
            <HotDogCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "combo" && (
            <ComboCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "shawarma" && (
            <ShawarmaCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "pizza" && (
            <PizzaCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "wok" && (
            <WokCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "desert" && (
            <DesertCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
          {activeCategory === "souce" && (
            <SauceCatalog
              addToBasket={(item) => addToBasket(basket, setBasket, item)}
            />
          )}
        </div>{" "}
      </div>
    </>
  );
};

export default Body;
