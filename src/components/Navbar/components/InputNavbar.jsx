import Search from "../../../assets/svg/search-icon.svg";
import SearchListProduct from "./SearchListProduct";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglescreen } from "../../../redux/screenslice";
const NavbarInput = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const datashop = useSelector((state) => state.Data.DetailProduct);
  const [filteredSearch, setFilterSearch] = useState([]);
  const handleSearch = () => {
    dispatch(togglescreen());
  };

  const handleSearching = (e) => {
    setVisible(true);
    const filteredData = datashop.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterSearch(filteredData);
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
        onChange={(e) => handleSearching(e)}
      />

      {visible && (
        <div className="absolute inset-0 z-[97] flex h-[350px] justify-center overflow-y-auto rounded-2xl bg-white shadow-lg">
          <div className="mt-[58px] flex w-full flex-col gap-y-3 px-2 font-poppins">
            {filteredSearch.length > 0
              ? filteredSearch.map((item) => (
                  <SearchListProduct
                    key={item.color}
                    item={item}
                    setVisible={setVisible}
                  />
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarInput;
