import { ScrollNavigateToTop } from "../helper/NavigateToTop";
import HeaderCategory from "../pages/CategoryPage/components/HeaderCategory";

const LayoutPageProduct = ({ children }) => {
  return (
    <>
      <ScrollNavigateToTop />
      <div
        id="category"
        className="m-auto w-full px-[16px] font-poppins sm:px-[40px] lg:px-[80px] xl:px-[100px]"
      >
        <HeaderCategory />
        {children}
      </div>
    </>
  );
};

export default LayoutPageProduct;
