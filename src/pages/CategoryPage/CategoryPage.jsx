import HeaderCategory from "./components/HeaderCategory";
import FilterCategory from "./components/FilterCategory";
import CardProduct from "../../components/CardProduct";
import { useSelector } from "react-redux";
import { ScrollNavigateToTop } from "../../helper/NavigateToTop";

const CategoryPage = () => {
  const datafiltershop = useSelector((state) => state.Data.Data);
  const nameCategory = useSelector((state) => state.Data.name);

  

  return (
    <>
      <ScrollNavigateToTop />
      <div
        id="category"
        className="m-auto w-full px-[12px] font-poppins sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px]"
      >
        <HeaderCategory />

        <div className="mt-[24px] flex gap-x-[20px]">
          <FilterCategory />
          <div className="max-w-[925px]">
            <div className="mb-[16px] font-poppins text-3xl font-semibold">
              {nameCategory}
            </div>
            <div className="flex w-full flex-wrap justify-center gap-x-[14px] gap-y-[24px] sm:justify-normal  sm:gap-x-[20px] sm:gap-y-[36px]">
              {datafiltershop.map((item) => (
                <CardProduct
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
      </div>
    </>
  );
};

export default CategoryPage;
