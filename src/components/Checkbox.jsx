const Checkbox = () => {
  return (
    <div className="flex items-center justify-between text-center text-xs ">
      <div className="flex">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="text-[11px] sm:text-sm">
          Remember me
        </label>
      </div>
      <div className="cursor-pointer text-[11px] font-bold sm:text-sm">
        Forgot Password ?
      </div>
    </div>
  );
};

export default Checkbox;
