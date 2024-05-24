import { useDispatch, useSelector } from "react-redux";
import formatrupiah from "../helper/formatrupiah";
import { setCart } from "../redux/Cartslice";

function ModalCheckout({ setShowModal }) {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleCheckoutToWhatsapp = () => {
    if (total === 0) return;

    const phoneNumber = "6289526195247";
    const message = encodeURIComponent(
      `Halo, Saya ingin membeli :\n${cart.map((product) => `${product.quantity} barang - ${product.name}`).join(",\n")} \n\nTotal harga $${total}`,
    );

    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    dispatch(setCart([]));
    window.open(URL, "_blank");
  };

  return (
    <div className="fixed right-0 top-0 z-[9999999] h-screen w-full bg-black bg-opacity-30">
      <div className="flex h-screen items-center justify-center ">
        <div className="relative mb-[50px] w-4/5 sm:w-[450px] space-y-6 rounded-xl bg-white px-6 py-5 font-poppins sm:mb-0">
          <div
            onClick={() => setShowModal(false)}
            className="absolute -right-5 -top-5 flex cursor-pointer justify-end rounded-full bg-gray-200 px-3 py-1 text-4xl hover:bg-gray-500"
          >
            x
          </div>
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
            onClick={handleCheckoutToWhatsapp}
            className="w-full rounded-[62px] bg-green-500 text-center font-poppins text-[16px] font-semibold text-white duration-200 hover:bg-opacity-70"
          >
            <button className="py-[19px]">Go to Checkout (Whatsapp)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCheckout;
