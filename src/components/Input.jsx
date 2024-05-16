const Input = ({ htmlFor, children, onchange, info, autoComplete }) => {
  let auto;
  if (autoComplete == "true") {
    auto = "current password";
  }

  return (
    <div className="mb-3 flex flex-col">
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
        className="w-full rounded-md border p-2 text-sm placeholder-gray-600 shadow-md focus:outline-green-400"
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
