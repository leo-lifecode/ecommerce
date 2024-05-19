import { Link } from "react-router-dom";
import star5 from "../../../assets/svg/5-star.svg";

const ListCardDetail = ({ product, productName, price, id }) => {
  return (
    <div className=" bg-primary sm:basis-[40%] md:basis-[25%] lg:flex-[0_0_20%] lg:basis-0">
      <div className="h-[164px] w-[160px] xl:h-[258px] xl:w-[255px]">
        <Link to={`/category/detail/${id}`}>
          <img
            src={product}
            alt={productName}
            className="h-full w-full rounded-[20px] border border-white"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1 sm:gap-4">
        <div className="text-left font-poppins text-[16px] font-bold sm:text-xl">
          {productName}
        </div>
        <div className="flex w-[150px] gap-3 sm:w-full">
          <div>
            <img src={star5} />
          </div>
          <div className="">4.5/5</div>
        </div>
        <div className="flex font-poppins font-bold">
          <span className="font-poppins text-[20px]">$</span>
          <div className="text-[20px]">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ListCardDetail;
