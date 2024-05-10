import React from "react";

const Input = ({ htmlFor, children, onchange, info, autoComplete }) => {
  let auto;
  if (autoComplete == "true") {
    auto = "current password";
  }

  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={htmlFor}>{children}</label>
      <input
        style={{
          border: info !== false ? "1px solid black" : "1px solid red",
        }}
        onChange={onchange}
        placeholder={htmlFor}
        name={htmlFor}
        id={htmlFor}
        autoComplete={auto}
        type={htmlFor}
        className="border shadow-md p-2 w-full placeholder-gray-600 rounded-md text-sm focus:outline-green-400"
      />
      {info === false && (
        <div className="text-[12px] text-red-500">
          username tidak lebih dari 5 karakter
        </div>
      )}
    </div>
  );
};

export default Input;
