import { useSelector } from "react-redux";
import CardDetailProduct from "./CardDetailProduct";

const ImageProductDetail = ({
  checkId,
  changeImg,
  handleChangeImg,
  dummyprojectproduct,
  dummyprojectproduct2,
  dummyprojectproduct3,
}) => {
  const selectProduct = useSelector((state) => state.Data.selectProduct);
  return (
    <div className="m-auto grid gap-3 md:gap-2 xl:gap-4">
      <div className="col-span-3 row-start-1 md:col-start-2 md:row-span-3">
        <div className="h-max w-max">
          <img
            src={changeImg ? changeImg : selectProduct[0]?.img}
            className="h-[300px] w-[280px] sm:h-[290px] sm:w-[358px] md:h-[320px] md:w-[230px] lg:h-[420px] lg:w-[320px] xl:h-[530px] xl:w-[444px]"
          />
        </div>
      </div>
      <div className="row-span-1 md:col-start-1 md:row-start-1">
        <CardDetailProduct
          id="1"
          img={dummyprojectproduct}
          handleChangeImg={handleChangeImg}
          checkId={checkId}
        />
      </div>
      <div className="row-span-1 md:col-start-1 md:row-start-2 ">
        <CardDetailProduct
          id="2"
          img={dummyprojectproduct2}
          handleChangeImg={handleChangeImg}
          checkId={checkId}
        />
      </div>
      <div className="row-span-1 md:row-start-3  ">
        <CardDetailProduct
          id="3"
          img={dummyprojectproduct3}
          handleChangeImg={handleChangeImg}
          checkId={checkId}
        />
      </div>
    </div>
  );
};

export default ImageProductDetail;
