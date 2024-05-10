import React from "react";
import TitleProduct from "../../components/TitleProduct";
import DataReview from "../../data/DataReviewCustomer";
import CardReview from "../../components/CardReview";
import { LeftArrow, RightArrow } from "../../components/Icon";
const ReviewCustomer = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-14 bg-primary py-[25px] text-center sm:text-left ">
        <div className="flex justify-between px-4 text-left md:px-[100px] ">
          <div className="max-w-[286px] sm:max-w-full">
            <TitleProduct>OUR HAPPY CUSTOMER</TitleProduct>
          </div>
          <div className="flex cursor-pointer items-center gap-3">
            <LeftArrow />
            <RightArrow />
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="no-scrollbar flex snap-mandatory gap-x-3 overflow-scroll p-4">
            {DataReview.map((item, index) => (
              <CardReview
                key={index}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCustomer;
