import React from "react";
import Categor from "../../components/Categor";
import DataShop from "../../data/DataShop";
import ListProduct from "../../components/ListProduct";
const CategoryShop = () => {
  return (
    <>
      <Categor />
      <ListProduct DataShop={DataShop.pakaian}>PAKAIAN</ListProduct>
      <ListProduct DataShop={DataShop.celana}>CELANA</ListProduct>
    </>
  );
};

export default CategoryShop;
