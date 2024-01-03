import CatalogPage from "../../CatalogPage";
import PizzaData from "./PizzaData";

const PizzaCatalog = ({ addToBasket }) => (
  <CatalogPage title="Пицца" data={PizzaData} addToBasket={addToBasket} />
);

export default PizzaCatalog;
