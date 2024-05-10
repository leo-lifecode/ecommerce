import React from "react";
const ListFooter = ({ name, items }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="font-poppins text-base font-bold">{name}</div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default ListFooter;
