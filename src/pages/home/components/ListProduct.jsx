import TitleProduct from "./TitleProduct";
import CardProduct from "../../../components/CardProduct";
import { Link } from "react-router-dom";

const ListProduct = ({ DataShop, children }) => {
  return (
    <div className="mt-[72px] flex w-full flex-col bg-primary px-[24px] text-center sm:text-left md:px-[100px] lg:items-center ">
      <TitleProduct>{children}</TitleProduct>
      <div className="no-scrollbar mt-[55px] flex max-w-max snap-mandatory gap-x-4 overflow-x-scroll lg:flex-wrap lg:justify-center lg:gap-5">
        {DataShop.slice(0, 4).map((item) => (
          <CardProduct
            key={item.id}
            product={item.img}
            productName={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className="mx-auto my-[50px] w-full max-w-max cursor-pointer rounded-xl bg-gray-200 px-5 py-2 font-poppins font-medium">
        <Link to="/category">...Muat Lebih banyak...</Link>
      </div>
    </div>
  );
};

export default ListProduct;
