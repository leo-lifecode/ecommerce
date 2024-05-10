import React from "react";
import TitleProduct from "./TitleProduct";
import CardCategor from "./CardCategor";
import DataCategoryShop from "../data/DataCategoryShop";

const Categor = () => {
  return (
    <div className="bg-secondary w-full flex p-[25px] md:p-[100px] flex-col gap-14 text-center sm:text-left ">
      <TitleProduct>Category Shop</TitleProduct>
      <div className="flex items-center gap-3 sm:gap-x-3">
        {DataCategoryShop.map((item) => (
          <CardCategor key={item.id} Categor={item.kategori}>
            {item.description}
          </CardCategor>
        ))}
      </div>
    </div>
  );
};

export default Categor;
