import React from "react";
import CatalogPage from "../../CatalogPage";
import BurgersData from "./BurgersData";

const BurgerCatalog = ({ addToBasket }) => (
  <CatalogPage title="Бургеры" data={BurgersData} addToBasket={addToBasket} />
);

export default BurgerCatalog;
