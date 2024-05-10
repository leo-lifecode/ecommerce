import React from "react";
import star5 from "../assets/svg/5-star.svg";

const CardProduct = ({ product, productName, price }) => {
  return (
    <div className="max-w-[285px] flex-[0_0_70%] bg-primary sm:basis-[40%] md:basis-[25%] lg:flex-[0_0_100%]  lg:basis-0">
      <div className="xl:h-[228px] xl:w-[255px]">
        <img
          src={product}
          alt={productName}
          className="h-full w-full rounded-[20px] border border-white"
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-4 ">
        <div className="text-left font-poppins text-[16px] font-bold sm:text-xl">
          {productName}
        </div>
        <div className="flex gap-3">
          <div
            className="w-[139px] bg-no-repeat"
            style={{ backgroundImage: `url(${star5})` }}
          ></div>
          <div className="">4.5/5</div>
        </div>
        <div className="flex font-poppins font-bold">
          <span className="font-poppins text-[20px]">$</span>
          <div className="text-[20px]">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
