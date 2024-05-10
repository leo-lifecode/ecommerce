import React from "react";
import Search from "../assets/svg/search-icon.svg";
import SearchListProduct from "./SearchListProduct";
import { useState } from "react";
import { useEffect } from "react";

const NavbarInput = ({ screenOpacity, SetScreenOpacity }) => {
  const [visible, setVisible] = useState(false);
  const handleSearch = (e) => {
    SetScreenOpacity(!screenOpacity);
    setVisible(!visible);
  };

  useEffect(() => {
    const handleWindowClick = (e) => {
      const tar = document.querySelector(".tar");
      if (tar && !tar.contains(e.target) && visible) {
        setVisible(false);
        SetScreenOpacity(false);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [visible]);

  return (
    <div className="relative flex w-full ">
      <div className="absolute z-[99] m-auto flex h-full w-[40px] items-center justify-center">
        <img src={Search} alt="search-icon" className="search-icon" />
      </div>
      <input
        type="text"
        placeholder="Search for products..."
        className="tar z-[98] w-full rounded-2xl border border-gray-600 py-[12px] ps-10"
        onClick={handleSearch}
      />

      {visible && (
        <div className="absolute inset-0 z-[97] flex h-[350px] justify-center rounded-2xl bg-white shadow-lg">
          <div className="mt-[58px] flex w-full flex-col gap-y-3 px-2 font-poppins">
            <SearchListProduct />
            <SearchListProduct />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarInput;