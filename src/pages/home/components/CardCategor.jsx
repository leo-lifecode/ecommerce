import { useDispatch } from "react-redux";
import { filterbycategory } from "../../../redux/Datashofilterp";
import { Link } from "react-router-dom";

const CardCategor = ({ Categor, children }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(filterbycategory(children))}
      className="group/item relative flex h-[120px] w-full cursor-pointer overflow-hidden border max-xl:shadow-xl max-lg:rounded-2xl sm:h-[200px]"
    >
      <Link to="/category">
        <div
          className="absolute h-[120px] w-full overflow-hidden bg-contain bg-center bg-no-repeat duration-150 group-hover/item:contrast-50 sm:h-[350px] sm:bg-cover xl:bg-contain"
          style={{ backgroundImage: `url(${Categor})` }}
        ></div>
        <div className="absolute z-50 flex h-[120px] w-full items-center justify-center font-poppins text-lg font-semibold sm:h-[200px]   sm:text-2xl">
          {children}
        </div>
      </Link>
    </div>
  );
};

export default CardCategor;
