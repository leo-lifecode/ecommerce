import { filterbyPrice } from "../../../redux/Datashofilterp";
import Filterbrowsebydress from "./Filterbrowsebydress";
import { useDispatch, useSelector } from "react-redux";

const FilterCategory = () => {
  const dispatch = useDispatch();
  const activecheck = useSelector((state) => state.Data.name);
  const min = useSelector((state) => state.Data.Min);
  const max = useSelector((state) => state.Data.Max);
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
        <hr className="my-[20px]" />
        <div className="flex w-full gap-x-4">
          <div className="w-1/2">
            <input
              type="text"
              value={min}
              onChange={(e) =>
                dispatch(filterbyPrice({ max, min: e.target.value }))
              }
              placeholder="MIN"
              className="h-[35px] w-full border border-gray-400 px-2"
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              value={max}
              onChange={(e) =>
                dispatch(filterbyPrice({ min, max: e.target.value }))
              }
              placeholder="MAX"
              className="h-[35px] w-full border border-gray-400 px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
