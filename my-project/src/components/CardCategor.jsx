import React from "react";

const CardCategor = ({ Categor, children }) => {
  return (
    <div className="flex relative w-full h-[120px] sm:h-[200px] overflow-hidden cursor-pointer group/item border max-lg:rounded-2xl max-xl:shadow-xl">
      <div
        className="absolute w-full h-[120px] sm:h-[350px] bg-center bg-no-repeat bg-contain sm:bg-cover xl:bg-contain overflow-hidden group-hover/item:contrast-50 duration-150"
        style={{ backgroundImage: `url(${Categor})` }}
      ></div>
      <div className="absolute z-50 h-[120px] sm:h-[200px] w-full flex justify-center items-center font-poppins text-lg sm:text-2xl   font-semibold">
        {children}
      </div>
    </div>
  );
};

export default CardCategor;
