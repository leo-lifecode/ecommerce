import { Link } from "react-router-dom";

const HomeTextReview = ({ review, description }) => {
  return (
    <div>
      <div className="font-poppins text-2xl font-bold md:text-2xl lg:mb-[5px] lg:text-[32px]">
        {review}
      </div>
      <div className="font-poppins text-[12px] font-normal md:text-[14px]">
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
      <div className="font-poppins text-sm font-light md:text-base">
        Jelajahi beragam pakaian kami yang dibuat dengan cermat, dirancang untuk
        menonjolkan individualitas Anda dan memenuhi selera gaya Anda
      </div>
      <div className="w-full sm:w-max">
        <Link to={"category"}>
          <button className="l w-full rounded-[62px] bg-black px-16 py-4 font-poppins text-[16px] font-normal text-primary hover:bg-slate-500">
            Belanja Sekarang
          </button>
        </Link>
      </div>
      <div className="jsm:gap-3 flex flex-wrap justify-center gap-x-10 gap-y-4 sm:flex-nowrap sm:justify-between lg:gap-8">
        <HomeTextReview review="200+" description="International Brands" />
        <HomeTextReview review="2,000+" description=" High-Quality Products" />
        <HomeTextReview review="30,000+" description="Happy Customers" />
      </div>
    </>
  );
};

export default TextHome;
