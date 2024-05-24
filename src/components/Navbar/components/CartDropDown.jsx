import { useDispatch } from "react-redux";
import {
  decrementProduct,
  deleteCartProduct,
  incrementProduct,
} from "../../../redux/Cartslice";
import formatrupiah from "../../../helper/formatrupiah";
const CartDropDown = ({ item }) => {
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
    <>
      <div className="relative z-10 w-full rounded-b border-t-0 h-full">
        <div className="w-full shadow-lg h-full">
          <div className="flex cursor-pointer border-b border-gray-100  p-2 hover:bg-gray-100 h-full">
            <div className="flex h-12 w-12 flex-shrink-0 p-2">
              <img src={item.img} className="h-12 w-12" alt="img product" />
            </div>
            <div className="w-32 flex-auto text-sm ">
              <div className="font-semibold">{item.name}</div>

              <div className="text-[12px] text-gray-500">
                color : {item.color}
              </div>
              <div className="mt-[4px] flex gap-x-2">
                <div
                  onClick={() =>
                    handledecrement(item.color, item.size, item.id)
                  }
                  className="bg-gray-700 px-1 font-bold text-white duration-150 hover:bg-gray-900"
                >
                  -
                </div>
                <div className="text-gray-500">{item.quantity}</div>
                <div
                  onClick={() =>
                    handleIncrement(item.color, item.size, item.id)
                  }
                  className="bg-gray-700 px-1 font-bold text-white duration-150 hover:bg-gray-900"
                >
                  +
                </div>
              </div>
            </div>
            <div className="w-18 flex flex-col items-end font-medium h-full justify-between">
              <div
                onClick={() => handleDelete(item.id, item.color, item.size)}
                className="mb-6 h-4 w-4 cursor-pointer rounded-full text-red-700 hover:bg-red-200"
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
              <div className="mt-[4px] font-bold text-[10px]">Rp.{item.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropDown;
