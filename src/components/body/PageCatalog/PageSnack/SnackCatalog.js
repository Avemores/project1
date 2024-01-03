import CatalogPage from "../../CatalogPage";
import SnackData from "./SnackData";

const SnackCatalog = ({ addToBasket }) => (
  <CatalogPage title="Закуски" data={SnackData} addToBasket={addToBasket} />
);

export default SnackCatalog;
