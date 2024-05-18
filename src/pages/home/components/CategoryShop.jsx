import DataShop from "../../../data/DataShop";
import ListProduct from "./ListProduct";
const CategoryShop = () => {
  return (
    <>
      <ListProduct DataShop={DataShop.pakaian}>PAKAIAN</ListProduct>
      <ListProduct DataShop={DataShop.celana}>CELANA</ListProduct>
    </>
  );
};

export default CategoryShop;
