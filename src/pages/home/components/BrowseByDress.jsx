import DataBrowseBy from "../../../data/DataBrowsebyDress";
import ImageBrowseByDress from "./ImageBrowseByDress";
const BrowseByDress = () => {
  return (
    <div className="mx-4 flex max-w-[1239px] flex-col justify-center gap-7 bg-secondary px-6 sm:gap-16 md:px-[64px] md:py-[70px] lg:mx-auto">
      <div className="text-center font-cf text-3xl sm:text-5xl">
        Browse By Dress Your Style
      </div>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:grid-rows-2">
        {DataBrowseBy.map((item, index) => (
          <ImageBrowseByDress
            key={index}
            img={item.img}
            col={item.col}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseByDress;
