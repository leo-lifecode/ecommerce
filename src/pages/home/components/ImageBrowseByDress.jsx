import { useDispatch } from "react-redux";
import { filterbycategory } from "../../../redux/Datashofilterp";
import { Link } from "react-router-dom";

const ImageBrowseByDress = ({ img, col, name }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(filterbycategory(name))}
        className={`relative h-[190px] bg-cover bg-center bg-no-repeat ${col} md:h-[289px]`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <Link to="/category">
          <div className="absolute ps-4 pt-4 z-50 font-poppins text-2xl font-semibold w-full h-full hover:bg-black hover:bg-opacity-10">
            {name}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ImageBrowseByDress;
