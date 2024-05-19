import FilterCategory from "./components/FilterCategory";
import CardProduct from "../../components/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import LayoutPageProduct from "../../layout/LayoutPageProduct";
import { BottomArrow } from "../../components/Icon";
import { useState } from "react";
import { sortby } from "../../redux/Datashofilterp";

const CategoryPage = () => {
  const datafiltershop = useSelector((state) => state.Data.Data);
  const nameCategory = useSelector((state) => state.Data.name);
  const [show, setShow] = useState(false);

  const NameSortBy = useSelector((state) => state.Data.sortBy);
  const dispatch = useDispatch();
  const HandleShow = (e) => {
    setShow(!show);
    dispatch(sortby(e.target.id));
  };

  return (
    <LayoutPageProduct>
      <div className="mt-[24px] flex gap-x-[20px]">
        <FilterCategory />
        <div className="max-w-[925px]">
          <div className="flex justify-between">
            <div className="mb-[16px] font-poppins text-3xl font-semibold">
              {nameCategory}
            </div>
            <div className="font-poppins text-[18px]">
              <div className="flex h-max gap-x-2">
                <div className="text-gray-400">Sort by: </div>
                <div
                  onClick={HandleShow}
                  className="relative flex cursor-pointer items-center justify-center gap-x-2"
                >
                  <div>{NameSortBy}</div>
                  <BottomArrow />
                  <div
                    className={`${show ? "block" : "hidden"} absolute left-0 top-[30px] h-max w-[120px] space-y-1 rounded-b-md bg-white text-[14px]`}
                  >
                    <div id="Relevansi" className="px-2 py-1 hover:bg-gray-200">
                      Relevansi
                    </div>
                    <div
                      id="Harga Tertinggi"
                      className="px-2 py-1 hover:bg-gray-200"
                    >
                      Harga Tertinggi
                    </div>
                    <div
                      id="Harga Terendah"
                      className="px-2 py-1 hover:bg-gray-200"
                    >
                      Harga Terendah
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-x-[14px] gap-y-[24px] sm:justify-normal  sm:gap-x-[20px] sm:gap-y-[36px]">
            {datafiltershop?.map((item) => (
              <CardProduct
                id={item.id}
                key={item.id}
                product={item.img}
                productName={item.name}
                price={item.price}
              />
            ))}
          </div>
          <div className="mt-[20px] flex w-full items-center justify-center">
            <div>pagination</div>
          </div>
        </div>
      </div>
    </LayoutPageProduct>
  );
};

export default CategoryPage;
