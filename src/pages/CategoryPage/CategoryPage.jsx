import FilterCategory from "./components/FilterCategory";
// import CardProduct from "../../components/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import LayoutPageProduct from "../../layout/LayoutPageProduct";
import { BottomArrow, Filtermobile } from "../../components/Icon";
import { useState } from "react";
import { filterbyPrice, sortby } from "../../redux/Datashofilterp";
import Filterbrowsebydress from "./components/Filterbrowsebydress";
import PaginatedItems from "./components/PaginatedItems";

const CategoryPage = () => {
  const datafiltershop = useSelector((state) => state.Data.Data);
  const nameCategory = useSelector((state) => state.Data.name);
  const [show, setShow] = useState(false);
  const activecheck = useSelector((state) => state.Data.name);
  const min = useSelector((state) => state.Data.Min);
  const max = useSelector((state) => state.Data.Max);
  const NameSortBy = useSelector((state) => state.Data.sortBy);
  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();
  const HandleShow = (e) => {
    setShow(!show);
    dispatch(sortby(e.target.id));
  };

  return (
    <LayoutPageProduct>
      <div className="relative mt-[24px] flex gap-x-[20px] bg-opacity-10">
        <FilterCategory />
        {showFilter && (
          <div className="duration-250 fixed left-0 right-0 top-0 z-[9999999] h-screen w-full bg-black bg-opacity-90 shadow-2xl sm:hidden">
            <div className="flex h-full w-full justify-end">
              <div className="h-full w-3/4 rounded-l-xl bg-white p-[20px]">
                <div className="mb-[24px] flex w-full items-center justify-between border-b border-black border-opacity-10 pb-[24px] text-xl font-semibold">
                  <div>Filters</div>
                  <div
                    onClick={() => setShowFilter(false)}
                    className="rounded-full px-3 py-1 text-xl hover:bg-gray-300"
                  >
                    x
                  </div>
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
                <div
                  className={`mt-[20px] space-y-1 rounded-b-md bg-white text-[18px]`}
                >
                  <div>sort by : </div>
                  <div onClick={HandleShow} className="space-y-1">
                    <div id="Relevansi" className="hover:bg-gray-200">
                      ◉ Relevansi
                    </div>
                    <div id="Harga Tertinggi" className="hover:bg◉gray-200">
                      ◉ Harga Tertinggi
                    </div>
                    <div id="Harga Terendah" className="hover:bg-gray-200">
                      ◉ Harga Terendah
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full max-w-[925px]">
          <div className="mb-[16px] flex w-full items-center justify-between">
            <div className="font-poppins text-3xl font-semibold">
              {nameCategory}
            </div>
            <div className="icon flex items-center justify-center filter sm:hidden">
              <div
                onClick={() => setShowFilter(true)}
                className="rounded-full bg-gray-300 px-3 py-3"
              >
                <Filtermobile />
              </div>
            </div>
            <div className="hidden font-poppins text-[18px] sm:block">
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
          <div className="flex w-full flex-col lg:h-[1296px] ">
            {/* {datafiltershop?.map((item) => (
              <CardProduct
                id={item.id}
                key={item.id && item.img}
                product={item.img}
                productName={item.name}
                price={item.price}
              />
            ))} */}
            <PaginatedItems
              itemsPerPage={9}
              lengthitems={datafiltershop.length}
              items={datafiltershop}
            />
          </div>
        </div>
      </div>
    </LayoutPageProduct>
  );
};

export default CategoryPage;
