import { Link } from "react-router-dom";
import formatrupiah from "../../../helper/formatrupiah";
const SearchListProduct = ({ item, setVisible }) => {
  return (
    <div onClick={() => setVisible(false)}>
      <Link to={`category/detail/${item.id}`}>
        <div className="flex cursor-pointer gap-2 rounded-lg p-2 shadow-md">
          <div className="flex w-[75px] flex-shrink-0">
            <img
              className="w-[75px] rounded-lg"
              src={item.img}
              alt="imageproduct"
            />
          </div>
          <div className="flex flex-col ps-1">
            <div className="font-poppins font-semibold">{item.name}</div>
            <div className="mb-1 line-clamp-2 text-sm text-gray-400">
              {item.description}
            </div>
            <div className="font-bold">{formatrupiah(item.price)}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchListProduct;
