import { useDispatch } from "react-redux";
import {
  decrementProduct,
  deleteCartProduct,
  incrementProduct,
  setTotal,
} from "../../redux/Cartslice";
import formatrupiah from "../../helper/formatrupiah";

function CardCheckoutProduct({ item }) {
  const dispatch = useDispatch();
  
  const handledecrement = (color, size, id) => {
    dispatch(decrementProduct({ color, size, id }));
    dispatch(setTotal({ color, size, id }));
  };
  const handleIncrement = (color, size, id) => {
    dispatch(incrementProduct({ color, size, id }));
    dispatch(setTotal({ color, size, id }));
  };
  const handleDelete = (id, color, size) => {
    dispatch(deleteCartProduct({ id, color, size }));
    dispatch(setTotal({ color, size, id }));
  };
  return (
    <div className="flex  w-full">
      <div className="me-[2px] sm:me-[14px] flex w-[90px] h-[90px] sm:h-[124px] sm:w-[124px] flex-shrink-0 lg:me-[16px]">
        <img src={item.img} className="w-[90px] h-[90px] sm:w-full" />
      </div>
      <div className="flex w-full justify-between lg:gap-x-16">
        <div className="flex flex-col justify-between gap-y-4 font-poppins text-[14px]">
          <div className="space-x-[2px]">
            <div className="font-cf text-[11px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
              {item.name}
            </div>
            <div>
              size : <span className="text-gray-500">{item.size}</span>
            </div>
            <div>
              color : <span className="text-gray-500">{item.color}</span>
            </div>
          </div>
          <div className="font-poppins text-[16px] font-bold sm:text-[18px] lg:text-[24px]">
            {formatrupiah(item.price * item.quantity)}
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex w-full cursor-pointer justify-end ">
            <div
              onClick={() => handleDelete(item.id, item.color, item.size)}
              className="h-4 w-4 rounded-full text-right hover:bg-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2 "
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
          </div>
          <div className="flex space-x-1 sm:space-x-4 bg-gray-100 font-poppins font-semibold sm:text-xl lg:text-2xl">
            <div
              className="cursor-pointer rounded-full px-2 hover:bg-gray-400"
              onClick={() => handledecrement(item.color, item.size, item.id)}
            >
              -
            </div>
            <div>{item.quantity}</div>
            <div
              className="cursor-pointer rounded-full px-2 hover:bg-gray-400"
              onClick={() => handleIncrement(item.color, item.size, item.id)}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCheckoutProduct;
