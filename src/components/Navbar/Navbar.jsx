import NavbarIcon from "../Navbar/components/IconNavbar";
import NavbarInput from "../Navbar/components/InputNavbar";
import { Link } from "react-router-dom";
import NavbarSearchMobile from "./components/NavbarSearchMobile";

const Navbar = () => {
  return (
    <div className="relative flex w-full justify-center">
      <div
        className="flex w-full items-center justify-between gap-10 bg-primary px-3  py-6
        md:px-[20px] lg:px-[100px]"
      >
        <ul className="flex flex-shrink-0 items-center gap-10">
          <Link to={"https://shoply-tnbcommerce.vercel.app/"}>
            <div className="cursor-pointer font-cf sm:text-2xl md:text-3xl">
              SHOPLY TNB.
            </div>
          </Link>
        </ul>
        <div className="hidden w-full sm:block">
          <NavbarInput />
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <NavbarIcon />
        </div>
      </div>
      <NavbarSearchMobile />
    </div>
  );
};

export default Navbar;
