import LayoutPageProduct from "../../layout/LayoutPageProduct";
import dummyprojectproduct3 from "../../assets/images/dummydetailproduct3.png";
import dummyprojectproduct2 from "../../assets/images/dummydetailproduct2.png";
import dummyprojectproduct from "../../assets/images/dummydetailproduct.png";
import { useState } from "react";
import ImageProductDetail from "./components/ImageProductDetail";
import OptionAddtoCart from "./components/OptionAddtoCart";
import DeskripsisDetailProduct from "./components/DeskripsisDetailProduct";
import CardProduct from "../../components/CardProduct";

const DetailProduct = () => {
  const [changeImg, setChangeImg] = useState(dummyprojectproduct3);
  const [checkId, setCheckId] = useState("1");
  const handleChangeImg = (id) => {
    setCheckId(id);
    if (id === "1") return setChangeImg(dummyprojectproduct3);
    if (id === "2") return setChangeImg(dummyprojectproduct2);
    if (id === "3") return setChangeImg(dummyprojectproduct);
  };

  return (
    <LayoutPageProduct>
      <div className="mt-[20px] md:mt-[28px] xl:mt-[36px] gap-x-4 flex md:gap-x-5 xl:gap-x-10 flex-col md:flex-row md:justify-center lg:justify-normal">
        <div className="flex h-max flex-shrink-0">
          <ImageProductDetail
            changeImg={changeImg}
            checkId={checkId}
            handleChangeImg={handleChangeImg}
            dummyprojectproduct={dummyprojectproduct}
            dummyprojectproduct2={dummyprojectproduct2}
            dummyprojectproduct3={dummyprojectproduct3}
          />
        </div>
        <OptionAddtoCart />
      </div>
      <DeskripsisDetailProduct />
      <div className="my-[64px] flex flex-col items-center justify-center gap-y-[55px]">
        <div className="font-cf text-[48px] uppercase text-center">You might also like</div>
        <div className="flex items-center justify-center gap-x-5">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </LayoutPageProduct>
  );
};

export default DetailProduct;
