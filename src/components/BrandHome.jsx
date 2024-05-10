import React from "react";
import Brand1 from "../assets/svg/brand-1.svg";
import Brand2 from "../assets/svg/brand-2.svg";
import Brand3 from "../assets/svg/brand-3.svg";
import Brand4 from "../assets/svg/brand-4.svg";
import Brand5 from "../assets/svg/brand-5.svg";
import ImageComponent from "./ImageComponent";

const BrandHome = () => {
  return (
    <>
      <ImageComponent
        src={Brand1}
        style="w-[116.74px] h-[23.25px] lg:min-w-max lg:h-max"
      />
      <ImageComponent
        src={Brand2}
        style="w-[63.81px] h-[26.65px] lg:min-w-max lg:h-max"
      />
      <ImageComponent
        src={Brand3}
        style="w-[109.39px] h-[25.24px] lg:min-w-max lg:h-max"
      />
      <ImageComponent
        src={Brand4}
        style="w-[127px] h-[21px] lg:min-w-max lg:h-max"
      />
      <ImageComponent
        src={Brand5}
        style="w-[134.84px] h-[21.75px] lg:min-w-max lg:h-max"
      />
    </>
  );
};

export default BrandHome;
