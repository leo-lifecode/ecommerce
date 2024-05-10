import React from "react";

const ImageBrowseByDress = ({ img, col, name }) => {
  return (
    <div
      className={`relative h-[190px] bg-cover bg-center bg-no-repeat ${col} md:h-[289px]`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute left-4 top-4 z-50 font-poppins text-2xl font-semibold">
        {name}
      </div>
    </div>
  );
};

export default ImageBrowseByDress;
