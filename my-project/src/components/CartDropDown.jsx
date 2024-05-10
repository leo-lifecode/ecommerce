import React from "react";

const CartDropDown = () => {
  return (
    <>
      <div className="absolute z-10 w-full rounded-b border-t-0">
        <div className="w-full shadow-lg">
          <div className="flex cursor-pointer border-b border-gray-100 bg-white p-2 hover:bg-gray-100">
            <div className="w-12 p-2">
              <img
                src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
                alt="img product"
              />
            </div>
            <div className="w-32 flex-auto text-sm">
              <div className="font-bold">Product 1</div>
              <div className="truncate text-gray-500 text-[12px]">Product 1 description</div>
              <div className="flex gap-x-2 mt-[4px]">
                <div className="bg-gray-700 px-1 font-bold text-white duration-150 hover:bg-gray-900">
                  -
                </div>
                <div className="text-gray-500">2</div>
                <div className="bg-gray-700 px-1 font-bold text-white duration-150 hover:bg-gray-900">
                  +
                </div>
              </div>
            </div>
            <div className="w-18 flex flex-col items-end font-medium ">
              <div className="mb-6 h-4 w-4 cursor-pointer rounded-full text-red-700 hover:bg-red-200">
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
              <div className="font-bold mt-[4px]">$12.22</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropDown;
