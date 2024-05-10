import React from "react";
import IconEmail from "../../assets/svg/email.svg";
import Button from "../../components/Button";
const Subscribe = () => {
  return (
    <div className="flex w-full flex-col gap-14 bg-primary px-[16px] py-[25px] text-center sm:text-left md:p-[100px] ">
      <div className="flex flex-col items-center justify-between rounded-[20px] bg-black px-[24px] py-[32px] md:flex-row md:px-[64px] md:py-[43px]">
        <div className="mb-[32px] text-left font-cf text-4xl text-white md:mb-0 md:w-1/2">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="flex w-full flex-col items-end md:w-1/2">
          <div className="relative flex w-full md:w-3/4 ">
            <div className="absolute my-auto ms-2 flex h-full w-[40px] items-center justify-center">
              <img src={IconEmail} alt="search-icon" className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Enter your email address.."
              className="w-full rounded-[64px] border border-gray-600 py-[12px] ps-12"
            />
          </div>
          <div className="mt-[12px] w-full md:w-3/4">
            <Button bg="bg-white text-black rounded-[64px]">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
