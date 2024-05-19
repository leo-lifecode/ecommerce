const SelectColor = ({ id, item, HandleSelect, activeColor }) => {
  return (
    <div
      id={id}
      onClick={(e) => HandleSelect(e, item)}
      style={{
        backgroundColor: item,
        border: activeColor === id ? "2px solid black" : "none",
      }}
      className={`h-[37px] w-[37px] cursor-pointer rounded-full hover:border-2 hover:border-black`}
    ></div>
  );
};

export default SelectColor;
