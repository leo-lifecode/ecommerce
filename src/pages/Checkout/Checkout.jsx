import { useDispatch, useSelector } from "react-redux";
import CardCheckoutProduct from "./CardCheckoutProduct";
import { useEffect, useState } from "react";
import { setTotal } from "../../redux/Cartslice";
import formatrupiah from "../../helper/formatrupiah";
import ModalCheckout from "../../components/ModalCheckout";
function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTotal());
  }, [cart]);

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div
      id="category"
      className="m-auto w-full px-[16px] font-poppins sm:px-[40px] lg:px-[80px] xl:px-[100px]"
    >
      <div className="py-6 font-cf text-4xl uppercase sm:text-3xl lg:text-4xl">
        Your Cart
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:gap-x-2 lg:gap-x-5">
        <div className="scrollcart max-h-[389px] w-full space-y-12 overflow-y-scroll p-3 sm:max-h-[508px] sm:w-3/5 sm:px-4 sm:py-3 lg:px-6 lg:py-5">
          {cart.length > 0 ? (
            cart.map((item) => <CardCheckoutProduct item={item} />)
          ) : (
            <div className="flex w-3/5 items-center justify-center font-poppins text-xl font-medium capitalize">
              anda belum belanja
            </div>
          )}
        </div>
        <div className="mb-[50px] w-full space-y-6 px-6 py-5 font-poppins sm:mb-0 sm:w-2/5">
          <div className="text-2xl font-bold sm:text-xl lg:text-2xl">
            Order Summary
          </div>
          <div className="space-y-5 text-xl sm:text-lg lg:text-xl">
            <div className="flex items-center justify-between">
              <div className="text-gray-500">Subtotal</div>
              <div>{formatrupiah(total)}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-500">Delivery</div>
              <div>Rp.10.000</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-500">Tax</div>
              <div>Rp.0</div>
            </div>
          </div>
          <div className="mt-[20px] flex items-center justify-between text-[20px]">
            <div>Total</div>
            <div>
              {total !== 0
                ? new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(parseFloat(total) - 10000)
                : "Rp0"}
            </div>
          </div>
          <div
            onClick={handleShow}
            className="w-full rounded-[62px] bg-black text-center font-poppins text-[16px] text-white duration-200 hover:bg-black hover:bg-opacity-90"
          >
            <button className="py-[19px]">Go to Checkout</button>
          </div>
        </div>
      </div>
      {showModal ? <ModalCheckout setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default Checkout;
