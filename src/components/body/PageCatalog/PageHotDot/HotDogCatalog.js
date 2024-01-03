import HotDogData from "./HotDogData";
import CatalogPage from "../../CatalogPage";

const HotDogCatalog = ({ addToBasket }) => (
  <CatalogPage title="Хот-Доги" data={HotDogData} addToBasket={addToBasket} />
);

export default HotDogCatalog;
