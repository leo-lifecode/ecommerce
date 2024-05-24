const DeskripsisDetailProduct = ({item}) => {
  return (
    <div className="mt-[80px] space-y-4 font-poppins text-[18px]">
      <div className="w-max py-[14px]">
        <div className="border-b border-gray-400 pb-[24px] text-[20px] font-semibold">
          Product Details
        </div>
      </div>
      <div className="flex ">
        <div className="w-[80px] text-gray-500">Bahan</div>
        <div>{item.bahan}</div>
      </div>
      <div className="flex">
        <div className="w-[80px] text-gray-500">Merek</div>
        <div>{item.merk}</div>
      </div>
      <div className="flex">
        <div className="w-[80px] text-gray-500">Motif</div>
        <div>{item.motif}</div>
      </div>
      <div className="py-[14px] pb-[24px] text-[20px] font-semibold">
        Deskripsi product
      </div>
      <div>
        <p className="text-[16px]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default DeskripsisDetailProduct;
