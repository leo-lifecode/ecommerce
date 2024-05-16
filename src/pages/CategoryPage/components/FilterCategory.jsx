import { useState } from "react";
import Filterbrowsebydress from "./Filterbrowsebydress";
import { useSelector } from "react-redux";

const FilterCategory = () => {
  const activecheck = useSelector((state) => state.Data.name);

  // const [selectedName, setSelectedName] = useState(activecheck);

  return (
    <div className="hidden h-max w-[160px] flex-shrink-0 rounded-[20px] border border-black border-opacity-10 px-[24px] py-[20px] sm:block md:w-[180px] lg:w-[200px] xl:w-[295px]">
      <div className="w-full">
        <div className="mb-[24px] border-b border-black border-opacity-10 pb-[24px] text-xl font-semibold">
          Filters
        </div>
        <div className="flex flex-col gap-y-[22px]">
          {["CASUAL", "PAKAIAN", "CELANA", "SARUNG"].map((name) => (
            <Filterbrowsebydress
              key={name}
              name={name}
              activecheck={activecheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
