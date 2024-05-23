import { useState, useEffect } from "react";
import CartSvg from "../../../assets/svg/cart.svg";
import Profile from "../../../assets/svg/profile.svg";
import Search from "../../../assets/svg/search-icon.svg";
import CartDropDown from "./CartDropDown";
import { useDispatch, useSelector } from "react-redux";
import { toggleicon } from "../../../redux/screenslice";
import { Link } from "react-router-dom";
import { styleclip, styleclip2 } from "../../../helper/styleclip";

const NavbarIcon = () => {
  const [boxProfile, setBoxProfile] = useState(false);
  const [boxCart, setBoxCart] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const username = localStorage.getItem("username");
  let limitedText = username ? username.slice(0, 10) : "";

  useEffect(() => {
    const handleProfile = (e) => {
      const profile = document.querySelector(".profile");
      if (profile && !profile.contains(e.target) && boxProfile) {
        setBoxProfile(false);
      }
      const cart = document.querySelector(".cart");
      if (cart && !cart.contains(e.target) && boxCart) {
        setBoxCart(false);
      }
    };

    window.addEventListener("click", handleProfile);

    return () => {
      window.removeEventListener("click", handleProfile);
    };
  }, [boxProfile, boxCart]);

  return (
    <div className="flex gap-x-2">
      <div onClick={() => dispatch(toggleicon())}>
        <img src={Search} alt="search-icon" className="search-icon sm:hidden" />
      </div>
      <div className="cart relative">
        <div>
          <img
            src={CartSvg}
            alt="cart"
            className="relative z-[3] cursor-pointer"
            onClick={() => setBoxCart(!boxCart)}
          />
        </div>
        <div className="absolute -top-1/2 z-[2] flex w-full justify-center font-poppins text-xl font-bold text-red-700">
          {cart.length > 0 ? cart.length : ""}
        </div>
        <div
          style={{ clipPath: styleclip2().clipPath }}
          className={`${boxCart ? " z-[9999] opacity-100" : "z-[-9999] opacity-0"} absolute left-[-140px] mt-[20px] h-[450px] w-[200px] bg-zinc-200 p-3  text-black shadow-xl duration-300 sm:left-[-180px] sm:w-[250px] xl:left-[-215px] xl:w-[300px]`}
        >
          <div className="scrollcart z-[9999999] mt-[20px] flex h-full flex-col gap-y-2 overflow-y-scroll pb-[70px] font-poppins">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <CartDropDown key={index} item={item} />
              ))
            ) : (
              <div className="flex h-full flex-col items-center justify-center font-poppins font-semibold">
                <p className="text-center">keranjang masih kosong</p>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 z-[11] mb-[4px] flex w-full text-white">
            <div className=" flex h-[50px] w-[90%] cursor-pointer items-center justify-center self-end rounded-2xl bg-black font-poppins text-xl font-bold duration-200 hover:bg-gray-400 hover:text-black">
              <Link to="/checkout">Check out</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="profile relative flex gap-2">
        <img
          src={Profile}
          alt="Profile"
          className="cursor-pointer"
          onClick={() => setBoxProfile(!boxProfile)}
        />
        <div
          style={{ clipPath: styleclip().clipPath }}
          className={`${boxProfile ? "z-[9999] opacity-100 shadow-lg" : "z-[-9999] opacity-0"} absolute left-[-115px] mt-[40px] h-[140px] w-[150px] rounded-md bg-zinc-300 text-black duration-300`}
        >
          <div className="mt-[20px] flex flex-col font-poppins">
            <h3 className="text-md mx-1 cursor-pointer rounded-md px-1 py-[2px] font-poppins hover:bg-gray-500">
              {limitedText ? limitedText : "name:"}
            </h3>
            <div className="mx-1 mt-1 cursor-pointer rounded-md px-1 py-[2px] text-base  hover:bg-gray-500">
              <Link to="/checkout">Check Out</Link>
            </div>
            <button className="text-md mx-1 mt-[12px] cursor-pointer rounded-md bg-black p-1 text-left font-poppins text-white hover:bg-gray-500">
              {limitedText ? "Logout" : <Link to={"/signup"}>Daftar</Link>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarIcon;
