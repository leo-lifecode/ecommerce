import React from "react";

const Checkbox = () => {
  return (
    <div className="flex text-xs justify-between items-center text-center ">
      <div className="flex">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="text-[11px] sm:text-sm">
          Remember me
        </label>
      </div>
      <div className="font-bold text-[11px] sm:text-sm cursor-pointer">
        Forgot Password ?
      </div>
    </div>
  );
};

export default Checkbox;
