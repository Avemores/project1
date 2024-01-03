import CatalogPage from "../../CatalogPage";
import WokData from "./WokData";

const WokCatalog = ({ addToBasket }) => (
  <CatalogPage title="Вок" data={WokData} addToBasket={addToBasket} />
);

export default WokCatalog;
