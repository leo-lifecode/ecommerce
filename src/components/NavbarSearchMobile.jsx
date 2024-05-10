import React from "react";
import { LeftArrow } from "./Icon";
import NavbarInput from "./InputNavbar";

const NavbarSearchMobile = ({ visible, setVisible }) => {
  return (
    <div
      className={`${!visible ? "z-[-99] opacity-0" : "opacity-1 z-50"} absolute top-1 flex h-screen w-[98%] flex-col gap-y-4 overflow-y-scroll rounded-sm bg-gray-100 bg-opacity-90 p-3 shadow-xl duration-300 sm:hidden`}
    >
      <div className="mb-4 flex items-center gap-x-3 ">
        <div>
          <LeftArrow setVisible={setVisible} visible={visible} />
        </div>
        <NavbarInput />
      </div>
    </div>
  );
};

export default NavbarSearchMobile;
