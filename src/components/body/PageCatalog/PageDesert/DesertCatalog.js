import CatalogPage from "../../CatalogPage";
import DesertData from "./DesertData";

const DesertCatalog = ({ addToBasket }) => (
  <CatalogPage title="Десерты" data={DesertData} addToBasket={addToBasket} />
);

export default DesertCatalog;
