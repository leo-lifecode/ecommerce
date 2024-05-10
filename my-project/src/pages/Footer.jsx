import React from "react";
import {
  IconFb,
  IconIG,
  IconTwitter,
  MasterCard,
  GPay,
  Paypal,
  Applepay,
  Visa,
} from "../components/Icon";
import ListFooter from "../components/ListFooter";
import DataFooterList from "../data/DataFooterList";

const Footer = () => {
  return (
    <div className="px-[17px] py-[31px] md:px-[100px] md:py-[50px]">
      <div className="mb-[50px] md:gap-[90px] lg:flex xl:gap-[113px]">
        <div className="mb-[34px] flex flex-col gap-6 lg:mb-0 lg:max-w-[248px]">
          <div className="font-cf text-3xl">SHOPLY TNB.</div>
          <div className="text-[18px] text-gray-600 md:text-[24px] lg:text-[14px]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </div>
          <div className="flex gap-5 md:gap-3">
            <IconTwitter />
            <IconFb />
            <IconIG />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between gap-[40px] md:flex md:justify-start md:gap-[90px] md:gap-y-0 xl:gap-[113px]">
          <ListFooter name={DataFooterList[0].name} items={DataFooterList[1]} />
          <ListFooter name={DataFooterList[2].name} items={DataFooterList[3]} />
          <ListFooter name={DataFooterList[4].name} items={DataFooterList[5]} />
          <ListFooter name={DataFooterList[6].name} items={DataFooterList[7]} />
        </div>
      </div>
      <hr className="mb-6 bg-black" />
      <div className="sm:flex sm:justify-between">
        <div className="flex justify-center text-[18px] text-gray-500">
          © 2023-2024 All rights reserved
        </div>
        <div className="mt-[16px] flex justify-center sm:mt-0">
          <div className="px-[6px] py-[8px]">
            <Visa />
          </div>
          <div className="px-[6px] py-[8px]">
            <MasterCard />
          </div>
          <div className="px-[6px] py-[8px]">
            <Paypal />
          </div>
          <div className="px-[6px] py-[8px]">
            <GPay />
          </div>
          <div className="px-[6px] py-[8px]">
            <Applepay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
