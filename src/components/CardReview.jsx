import React from "react";
import { Icon5star, IconChecklist } from "./Icon";

const CardReview = ({ name, description }) => {
  return (
    <div className="flex max-w-[400px] flex-[0_0_100%] snap-start flex-col gap-y-4 rounded-[20px] px-[32px] py-[28px]">
      <Icon5star />
      <div className="flex font-poppins text-xl font-semibold">
        {name} <IconChecklist />
      </div>
      <div className="text-left">{description}</div>
    </div>
  );
};

export default CardReview;
