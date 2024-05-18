import { Icon5star } from "../../../components/Icon";
import LineBorder from "./LineBorder";
import SelectColor from "./SelectColor";
import SelectSize from "./SelectSize";

const OptionAddtoCart = () => {
  return (
    <div className="h-max">
      <div className="w-[267px] md:w-full flex flex-wrap mt-[20px] md:mt-0 line-clamp-1 font-cf text-[24px] uppercase md:text-[18px] xl:text-[40px]">
        One Life Graphic T shirt
      </div>
      <div className="flex gap-x-[16px] mt-[12px] md:mt-0">
        <Icon5star />
        <div>5/5</div>
      </div>
      <div className="font-poppins text-[24px] font-bold xl:text-[32px] mt-[12px] md:mt-0">
        $260
      </div>
      <div className=" mt-[20px] md:mt-0 flex flex-wrap text-gray-500 md:line-clamp-3 md:w-[340px] md:text-[12px] lg:line-clamp-2 lg:w-full lg:text-[14px] xl:mt-[5px] xl:text-[16px]">
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </div>
      <LineBorder />
      <div className="flex flex-col gap-y-[16px]">
        <div className="font-poppins text-[16px] capitalize">select colors</div>
        <div className="flex gap-x-4">
          <SelectColor />
          <SelectColor />
          <SelectColor />
        </div>
      </div>
      <LineBorder />
      <div className="flex flex-col gap-y-4 font-poppins md:gap-y-2 xl:gap-y-4">
        <div>Choose Size</div>
        <div className="flex md:flex-wrap gap-2 lg:gap-x-3 md:w-[320px] lg:w-full lg:flex-nowrap">
          <SelectSize>small</SelectSize>
          <SelectSize>small</SelectSize>
          <SelectSize>small</SelectSize>
          <SelectSize>small</SelectSize>
        </div>
      </div>
      <LineBorder />
      <div className="flex gap-x-5">
        <div className="flex w-[170px] justify-between rounded-[62px] bg-[#F0F0F0] py-[12px] font-poppins xl:py-[20px]">
          <div className=" ps-[14px] font-poppins text-[24px] font-bold">
            <div className="cursor-pointer rounded-full px-2 hover:bg-slate-300">
              -
            </div>
          </div>
          <div className="px-[14px]  font-poppins text-[24px]">10</div>
          <div className=" pe-[14px] font-poppins text-[24px] font-bold">
            <div className="cursor-pointer rounded-full px-2 hover:bg-slate-300">
              +
            </div>
          </div>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center rounded-[62px] bg-black py-[12px] text-center text-[16px] font-semibold text-white duration-150 hover:border hover:border-black hover:bg-white hover:text-black xl:py-[15px]">
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default OptionAddtoCart;
