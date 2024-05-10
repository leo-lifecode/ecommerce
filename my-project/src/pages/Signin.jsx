import React from "react";
import Form from "../components/Form";

const Signin = () => {
  return (
    <div className="flex w-full items-center justify-center bg-gray-100 pt-[50px] sm:h-screen">
      <div
        className="m:w-4/5 box-border flex h-[500px] w-5/6 flex-col items-center justify-center gap-10 
        rounded-3xl bg-gray-50 shadow-2xl sm:p-[34px] md:w-4/6 lg:w-2/5 "
      >
        <h1 className="font-cf text-2xl font-semibold">SHOPLY TNB.</h1>
        <h1 className="mt-[-32px] font-cf text-xl font-medium">Masuk</h1>
        <Form type="signin" />
      </div>
    </div>
  );
};

export default Signin;
