import { useDispatch, useSelector } from "react-redux";
import { Icon5star } from "../../../components/Icon";
import LineBorder from "./LineBorder";
import SelectColor from "./SelectColor";
import SelectSize from "./SelectSize";
import { useEffect, useState } from "react";
import { addToCart } from "../../../redux/Cartslice";
import formatrupiah from "../../../helper/formatrupiah";
formatrupiah;
const OptionAddtoCart = () => {
  const data = useSelector((state) => state.Data.selectProduct);
  const [activeColor, setActiveColor] = useState(1);
  const [activeSize, setActiveSize] = useState(1);
  const [color, setColor] = useState("gray");
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    setActiveColor(1);
    setActiveSize(1);
  }, []);

  const HandleSelectColor = (e, item) => {
    const id = parseInt(e.target.id);
    setActiveColor(id);
    setColor(item);
  };

  const HandleSelectSize = (e, item) => {
    const id = parseInt(e.target.id);
    setActiveSize(id);
    setSize(item);
  };

  const HandleAddToCart = () => {
    dispatch(
      addToCart({ ...data[0], color: color, size: size, quantity: quantity }),
    );
    setQuantity(1);
  };

  return (
    <div className="h-max lg:w-full">
      <div className="mt-[20px] line-clamp-1 flex w-[267px] flex-wrap font-cf text-[24px] uppercase md:mt-0 md:w-full md:text-[18px] xl:text-[40px]">
        {data[0]?.name}
      </div>
      <div className="mt-[12px] flex gap-x-[16px] md:mt-0">
        <Icon5star />
        <div>5/5</div>
      </div>
      <div className="mt-[12px] font-poppins text-[24px] font-bold md:mt-0 xl:text-[32px]">
        {formatrupiah(data[0]?.price)}
      </div>
      <div className="mt-[20px] line-clamp-2 text-gray-500 md:mt-0 md:line-clamp-3 md:w-[340px] md:text-[12px] lg:line-clamp-2 lg:w-full lg:text-[14px] xl:mt-[5px] xl:text-[16px]">
        {data[0]?.description}
      </div>
      <LineBorder />
      <div className="flex flex-col gap-y-[16px]">
        <div className="font-poppins text-[16px] capitalize">select colors</div>
        <div className="flex gap-x-4">
          {["gray", "black", "red", "blue", "green"].map((item, index) => (
            <SelectColor
              key={index + 4}
              id={index + 1}
              HandleSelect={HandleSelectColor}
              item={item}
              activeColor={activeColor}
            />
          ))}
        </div>
      </div>
      <LineBorder />
      <div className="flex flex-col gap-y-4 font-poppins md:gap-y-2 xl:gap-y-4">
        <div>Choose Size</div>
        <div className="flex gap-2 md:w-[320px] md:flex-wrap lg:w-full lg:flex-nowrap lg:gap-x-3">
          {["S", "M", "XL", "XXL"].map((item, index) => (
            <SelectSize
              key={index + 2}
              id={index + 1}
              HandleSelectSize={HandleSelectSize}
              item={item}
              activeSize={activeSize}
            >
              {item}
            </SelectSize>
          ))}
        </div>
      </div>
      <LineBorder />
      <div className="flex gap-x-5">
        <div className="flex w-[170px] justify-between rounded-[62px] bg-[#F0F0F0] py-[12px] font-poppins xl:py-[20px]">
          <div className=" ps-[14px] font-poppins text-[24px] font-bold">
            <div
              onClick={() =>
                setQuantity(quantity > 1 ? quantity - 1 : quantity)
              }
              className="cursor-pointer rounded-full px-2 hover:bg-slate-300"
            >
              -
            </div>
          </div>
          <div className="px-[14px]  font-poppins text-[24px]">{quantity}</div>
          <div className=" pe-[14px] font-poppins text-[24px] font-bold">
            <div
              onClick={() => setQuantity(quantity + 1)}
              className="cursor-pointer rounded-full px-2 hover:bg-slate-300"
            >
              +
            </div>
          </div>
        </div>
        <div
          onClick={HandleAddToCart}
          className="flex w-full cursor-pointer items-center justify-center rounded-[62px] bg-black py-[12px] text-center text-[16px] font-semibold text-white duration-150 hover:border hover:border-black hover:bg-white hover:text-black xl:py-[15px]"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default OptionAddtoCart;
