import CatalogPage from "../../CatalogPage";
import SauceData from "./SauceData";

const SauceCatalog = ({ addToBasket }) => (
  <CatalogPage title="Соусы" data={SauceData} addToBasket={addToBasket} />
);

export default SauceCatalog;
