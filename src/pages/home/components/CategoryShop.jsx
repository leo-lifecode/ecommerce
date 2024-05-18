import DataShop from "../../../data/DataShop";
import ListProduct from "./ListProduct";
const CategoryShop = () => {
  return (
    <>
      <ListProduct DataShop={DataShop.PAKAIAN}>PAKAIAN</ListProduct>
      <ListProduct DataShop={DataShop.CELANA}>CELANA</ListProduct>
    </>
  );
};

export default CategoryShop;
