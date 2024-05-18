import { useSelector } from "react-redux";
import { RightArrow } from "../../../components/Icon";
import { Outlet } from "react-router-dom";

const HeaderCategory = () => {
  const nameCategory = useSelector((state) => state.Data.name);
  return (
    <>
      <div className="flex gap-1 text-base ">
        <div>Home</div>
        <div>
          <RightArrow />
        </div>
        <div>{nameCategory}</div>
      </div>
    </>
  );
};

export default HeaderCategory;
