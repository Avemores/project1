import CatalogPage from "../../CatalogPage";
import ShawarmaData from "./ShawarmaData";

const ShawarmaCatalog = ({ addToBasket }) => (
  <CatalogPage title="Шаурма" data={ShawarmaData} addToBasket={addToBasket} />
);

export default ShawarmaCatalog;
