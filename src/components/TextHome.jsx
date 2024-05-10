import React from "react";

const HomeTextReview = ({ review, description }) => {
  return (
    <div>
      <div className="font-poppins font-bold lg:mb-[5px] text-2xl md:text-2xl lg:text-[32px]">
        {review}
      </div>
      <div className="font-normal font-poppins text-[12px] md:text-[14px]">
        {description}
      </div>
    </div>
  );
};

const TextHome = () => {
  return (
    <>
      <div className="font-cf text-4xl lg:text-5xl xl:text-6xl">
        TEMUKAN FASHION YANG SESUAI DENGAN GAYA ANDA
      </div>
      <div className="font-poppins text-sm md:text-base font-light">
        Jelajahi beragam pakaian kami yang dibuat dengan cermat, dirancang untuk
        menonjolkan individualitas Anda dan memenuhi selera gaya Anda
      </div>
      <div className="w-full sm:w-max">
        <button className="w-full l py-4 px-16 rounded-[62px] bg-black font-poppins text-[16px] font-normal text-primary hover:bg-slate-500">
          Belanja Sekarang
        </button>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-x-10 gap-y-4 jsm:gap-3 lg:gap-8 justify-center sm:justify-between">
        <HomeTextReview review="200+" description="International Brands" />
        <HomeTextReview review="2,000+" description=" High-Quality Products" />
        <HomeTextReview review="30,000+" description="Happy Customers" />
      </div>
    </>
  );
};

export default TextHome;
