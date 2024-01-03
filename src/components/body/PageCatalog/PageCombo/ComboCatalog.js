import ComboData from "./ComboData";
import CatalogPage from "../../CatalogPage";

const ComboCatalog = ({ addToBasket }) => (
  <CatalogPage title="Комбо" data={ComboData} addToBasket={addToBasket} />
);

export default ComboCatalog;
