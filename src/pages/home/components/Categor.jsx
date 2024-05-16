import TitleProduct from "./TitleProduct";
import CardCategor from "./CardCategor";
import DataCategoryShop from "../../../data/DataCategoryShop";

const Categor = () => {
  return (
    <div className="flex w-full flex-col gap-14 bg-secondary p-[25px] text-center sm:text-left md:p-[100px] ">
      <TitleProduct>Category Shop</TitleProduct>
      <div className="flex items-center gap-3 sm:gap-x-3">
        {DataCategoryShop.map((item) => (
          <CardCategor key={item.id} Categor={item.kategori}>
            {item.description}
          </CardCategor>
        ))}
      </div>
    </div>
  );
};

export default Categor;
