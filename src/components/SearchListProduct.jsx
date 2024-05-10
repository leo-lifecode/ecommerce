import React from "react";
import DataShop from "../data/DataShop";

const SearchListProduct = () => {
  const imgShop = DataShop.pakaian;
  return (
    <div className="flex cursor-pointer gap-2 rounded-lg p-2 shadow-md">
      <div className="flex">
        <img
          className="w-[75px] rounded-lg"
          src={imgShop[0].img}
          alt="imageproduct"
        />
      </div>
      <div className="flex flex-col ps-1">
        <div>{imgShop[0].name}</div>
        <div className="mb-1 text-sm text-gray-400">{imgShop[0].description}</div>
        <div className="font-bold">Rp. {imgShop[0].price}</div>
      </div>
    </div>
  );
};

export default SearchListProduct;
