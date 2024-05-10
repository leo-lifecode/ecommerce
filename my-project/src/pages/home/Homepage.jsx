import React from "react";
import ImageHome from "../../components/ImageHome";
import TextHome from "../../components/TextHome";
import BrandHome from "../../components/BrandHome";
const Homepage = () => {
  return (
    <>
      <div
        className="box-border flex flex-col items-center justify-center 
      gap-3 overflow-hidden bg-secondary px-3 py-5 sm:flex-row sm:px-3 md:px-5 lg:h-[600px] lg:px-20 xl:h-[663px] xl:py-[90px]"
      >
        <div className="flex h-full w-full flex-col gap-5 sm:gap-4 md:gap-8 lg:gap-5 lg:py-[50px] xl:gap-10 xl:py-0 ">
          <TextHome />
        </div>
        <div className="h-[320px] w-full lowSm:h-[450px] lg:h-full lg:py-[10px] xl:py-0">
          <ImageHome />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-x-8 gap-y-5 overflow-hidden bg-black px-4 py-10 sm:justify-center md:flex-nowrap md:justify-between xl:gap-x-24 xl:px-24">
        <BrandHome />
      </div>
    </>
  );
};

export default Homepage;
