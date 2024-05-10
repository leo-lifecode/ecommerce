import React, { useState, useEffect } from "react";
import CartSvg from "../assets/svg/cart.svg";
import Profile from "../assets/svg/profile.svg";
import Search from "../assets/svg/search-icon.svg";
import CartDropDown from "./CartDropDown";

const NavbarIcon = ({ setVisible, visible }) => {
  const [boxProfile, setBoxProfile] = useState(false);
  const [boxCart, setBoxCart] = useState(false);

  const username = localStorage.getItem("username");
  let limitedText = username ? username.slice(0, 10) : "";
  const styleClip = {
    clipPath:
      "polygon(84% 1%, 89% 10%, 100% 10%, 100% 100%, 0 100%, 0 11%, 78% 10%)",
  };
  const styleClip2 = {
    clipPath:
      "polygon(67% 4%, 76% 0, 84% 4%, 100% 4%, 100% 100%, 0 100%, 0 4%)",
  };

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
      <div onClick={() => setVisible(!visible)}>
        <img src={Search} alt="search-icon" className="search-icon sm:hidden" />
      </div>
      <div className="cart relative">
        <img
          src={CartSvg}
          alt="cart"
          className="cursor-pointer"
          onClick={() => setBoxCart(!boxCart)}
        />
        <div
          style={styleClip2}
          className={`${boxCart ? " z-[9999] opacity-100" : "z-[-9999] opacity-0"} absolute left-[-140px] mt-[20px] h-[450px] w-[200px] rounded-md bg-zinc-200 p-3 text-black shadow-xl duration-300 sm:left-[-180px] sm:w-[250px] xl:left-[-215px] xl:w-[300px]`}
        >
          <div className="mt-[20px] flex flex-col relative font-poppins">
            <CartDropDown />
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
          style={styleClip}
          className={`${boxProfile ? "z-[9999] opacity-100 shadow-lg" : "z-[-9999] opacity-0"} absolute left-[-115px] mt-[40px] h-[120px] w-[150px] rounded-md bg-zinc-300 p-3 text-black duration-300`}
        >
          <div className="mt-[20px] flex flex-col">
            <h3 className="text-md mt-[-1px] font-poppins">{limitedText}</h3>
            <button className="text-md mt-[12px] rounded-md bg-black p-1 text-left font-poppins text-white">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarIcon;
