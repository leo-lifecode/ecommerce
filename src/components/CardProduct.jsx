import { Link } from "react-router-dom";
import star5 from "../assets/svg/5-star.svg";
import formatrupiah from "../helper/formatrupiah";
const CardProduct = ({ product, productName, price, id }) => {
  return (
    <div className=" bg-primary sm:basis-[40%] md:basis-[25%] lg:flex-[0_0_20%] lg:basis-0 w-[140px] sm:w-full h-[286px] sm:h-max flex justify-between flex-col">
      <div className="h-[164px] w-[140px] sm:w-[160px] md:w-[145px] xl:h-[258px] xl:w-[255px]">
        <Link to={`${id === undefined ? "/category" : `detail/${id}`}`}>
          <img
            src={product}
            alt={productName}
            className="h-full w-full rounded-[20px] border border-white"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1 sm:gap-4">
        <div className="text-left font-poppins text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] sm:font-bold sm:text-xl capitalize font-semibold">
          {productName}
        </div>
        <div className="flex w-[130px] sm:gap-3 sm:w-full">
          <div>
            <img src={star5} />
          </div>
          <div className="text-[14px]">4.5/5</div>
        </div>
        <div className="flex font-poppins font-bold">
          <div className="text-[20px]">{formatrupiah(price)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
