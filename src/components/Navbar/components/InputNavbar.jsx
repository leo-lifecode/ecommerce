import Search from "../../../assets/svg/search-icon.svg";
import SearchListProduct from "./SearchListProduct";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { togglescreen } from "../../../redux/screenslice";
const NavbarInput = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleSearch = () => {
    dispatch(togglescreen());
    setVisible(!visible);
  };

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (window.innerWidth > 640) {
        const tar = document.querySelector(".tar");
        if (tar && !tar.contains(e.target) && visible) {
          setVisible(false);
          dispatch(togglescreen());
        }
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
        className="tar z-[9999] w-full rounded-2xl border border-gray-600  py-[12px] ps-10"
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
