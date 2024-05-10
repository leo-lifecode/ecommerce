import React, { useState } from "react";
import ArrowDown from "../assets/svg/bottom-arrow.svg";
import NavbarIcon from "../components/IconNavbar";
import NavbarInput from "../components/InputNavbar";
import { Link } from "react-router-dom";
import NavbarSearchMobile from "../components/NavbarSearchMobile";

const Navbar = ({ screenOpacity, SetScreenOpacity }) => {
  const [visible, setVisible] = useState(false);
  const styleClip = {
    clipPath:
      "polygon(31% 0, 39% 3%, 100% 3%, 100% 100%, 0 100%, 0 3%, 23% 3%)",
  };
  return (
    <div className="relative flex w-full justify-center">
      <div
        className="flex w-full items-center justify-between gap-10 bg-primary px-3  py-6
        md:px-[20px] lg:px-[100px]"
      >
        <ul className="flex flex-shrink-0 items-center gap-10">
          <Link to={"shoplytnb"}>
            <div className="cursor-pointer font-cf sm:text-2xl md:text-3xl">
              SHOPLY TNB.
            </div>
          </Link>
          <div className="group relative">
            <li className="hidden cursor-pointer font-poppins text-lg font-medium sm:flex ">
              Shop
              <img src={ArrowDown} alt="ArrowDown" />
            </li>

            <div
              style={styleClip}
              className="absolute z-[-9999] ml-[7px] mt-[-4px] hidden h-max w-[150px] cursor-pointer flex-col gap-y-2 rounded-lg bg-slate-800 p-2 font-poppins text-white opacity-0 duration-1000 group-hover:z-[9999] group-hover:flex group-hover:opacity-100"
            >
              <Link to={"shoplytnb"}>
                <div className="rounded py-1">SHOPLY TNB</div>
              </Link>
              <div className="py-1 text-red-300">COMING SOON</div>
            </div>
          </div>
        </ul>
        <div className="hidden w-full sm:block">
          <NavbarInput
            screenOpacity={screenOpacity}
            SetScreenOpacity={SetScreenOpacity}
          />
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <NavbarIcon setVisible={setVisible} visible={visible} />
        </div>
      </div>
      <NavbarSearchMobile visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Navbar;
