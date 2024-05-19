const SelectSize = ({ children, id, HandleSelectSize, item, activeSize }) => {
  console.log(id === activeSize);
  return (
    <div
      id={id}
      onClick={(e) => HandleSelectSize(e, item)}
      style={{
        backgroundColor: activeSize === id ? "gray" : "#F0F0F0",
      }}
      className="cursor-pointer rounded-[62px] bg-[#F0F0F0] px-[12px] py-[8px] font-poppins text-[14px] capitalize hover:border hover:border-black sm:px-[20px] sm:py-[10px] md:px-[24px] md:py-[12px] md:text-[16px] md:font-medium"
    >
      {children}
    </div>
  );
};

export default SelectSize;
