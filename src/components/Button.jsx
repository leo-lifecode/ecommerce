const Button = ({ bg = "bg-slate-700 rounded-lg", children = "submit" }) => {
  return (
    <button
      className={`w-full py-3 font-poppins text-[18px] font-normal ${bg} text-black duration-200 hover:bg-black hover:text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
