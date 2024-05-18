import { useEffect, useState } from "react";

const CardDetailProduct = ({ img, id, handleChangeImg, checkId }) => {
  const [activeBorder, setActiveBorder] = useState("");

  useEffect(() => {
    if (id === checkId) {
      return setActiveBorder("rounded-[20px] border border-black");
    } else {
      return setActiveBorder("");
    }
  }, [checkId]);

  return (
    <div className="w-max h-max" onClick={() => handleChangeImg(id)}>
      <img src={img} className={`w-[81px] h-[76px] sm:w-[111px] sm:h-[106px] md:h-[100px] lg:h-[130px] xl:h-[167px] xl:w-[152px] ${activeBorder}`} />
    </div>
  );
};

export default CardDetailProduct;
