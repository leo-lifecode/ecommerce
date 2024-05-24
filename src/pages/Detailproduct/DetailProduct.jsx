import LayoutPageProduct from "../../layout/LayoutPageProduct";
import { useState, useEffect } from "react";
import ImageProductDetail from "./components/ImageProductDetail";
import OptionAddtoCart from "./components/OptionAddtoCart";
import DeskripsisDetailProduct from "./components/DeskripsisDetailProduct";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectProduct } from "../../redux/Datashofilterp";
import ListCardDetail from "./components/ListCardDetail";
import listcarddetailrandom from "../../helper/listcarddetailrandom";

const DetailProduct = () => {
  const { id } = useParams();
  const idProduct = parseInt(id);
  const selectProduct = useSelector((state) => state.Data.selectProduct);
  const data = useSelector((state) => state.Data.DetailProduct);
  const dispatch = useDispatch();
  const cardnumber = listcarddetailrandom(data, 4);

  useEffect(() => {
    const fetchProductDetail = () => {
      const selectedProduct = data.filter((item) => item.id === idProduct);
      if (selectedProduct) {
        dispatch(setSelectProduct(selectedProduct));
      }
    };
    fetchProductDetail();
  }, [idProduct]);

  const [changeImg, setChangeImg] = useState(false);
  const [checkId, setCheckId] = useState("1");
  const handleChangeImg = (id) => {
    setCheckId(id);
    if (id === "1") return setChangeImg(selectProduct[0]?.img);
    if (id === "2") return setChangeImg(selectProduct[0]?.img2);
    if (id === "3") return setChangeImg(selectProduct[0]?.img3);
  };

  return (
    <>
      {selectProduct
        ? selectProduct.map((item) => (
            <LayoutPageProduct>
              <div className="mt-[20px] flex flex-col gap-x-4 md:mt-[28px] md:flex-row md:justify-center md:gap-x-5 lg:justify-normal xl:mt-[36px] xl:gap-x-10">
                <div className="flex h-max flex-shrink-0">
                  <ImageProductDetail
                    changeImg={changeImg}
                    checkId={checkId}
                    handleChangeImg={handleChangeImg}
                    dummyprojectproduct={item.img}
                    dummyprojectproduct2={item.img2}
                    dummyprojectproduct3={item.img3}
                  />
                </div>
                <OptionAddtoCart />
              </div>
              {selectProduct
                ? selectProduct.map((item) => (
                    <DeskripsisDetailProduct
                      key={item.id && item.price}
                      item={item}
                    />
                  ))
                : null}
              <div className="my-[64px] flex flex-col items-center justify-center gap-y-[55px]">
                <div className="text-center font-cf text-[48px] uppercase">
                  You might also like
                </div>
                <div className="flex items-center justify-center gap-x-5 overflow-x-scroll no-scroll">
                  {cardnumber.map((item) => (
                    <ListCardDetail
                      key={item.size}
                      product={item.img}
                      productName={item.name}
                      price={item.price}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>
            </LayoutPageProduct>
          ))
        : null}
    </>
  );
};

export default DetailProduct;
