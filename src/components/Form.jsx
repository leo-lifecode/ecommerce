import { useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

const Form = ({ type }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [info, setInfo] = useState(true);
  const [infoErr, setInfoErr] = useState(true);

  const handleForm = (e) => {
    e.preventDefault();
    localStorage.setItem("email", form.email);
    localStorage.setItem("password", form.password);
    localStorage.setItem("username", form.username);
    window.location.href = "/Signin";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email === form.email && password === form.password) {
      window.location.href = "/Home";
    } else {
      setInfoErr(!infoErr);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInfo = name === "username" && value.length > 6 ? false : true;
    setInfo(newInfo);
    setForm({ ...form, [name]: value });
  };

  const formsignin = (
    <form onSubmit={handleLogin} className="w-3/5">
      {!infoErr && (
        <div className="mb-4 text-center text-[15px] text-red-600">
          username dan password anda salah
        </div>
      )}
      <Input htmlFor="email" onchange={handleChange} value={form.email}>
        Email
      </Input>
      <Input
        htmlFor="password"
        onchange={handleChange}
        autocomplete="true"
        value={form.password}
      >
        Password
      </Input>
      <div className="mb-4 mt-[-8px]">
        <Checkbox />
      </div>
      <Button>Login</Button>
    </form>
  );

  const formsignup = (
    <form onSubmit={handleForm} className="w-3/5">
      <Input
        htmlFor="username"
        info={info}
        onchange={handleChange}
        value={form.username}
      >
        Username
      </Input>
      <Input htmlFor="email" onchange={handleChange} value={form.email}>
        Email
      </Input>
      <Input
        htmlFor="password"
        onchange={handleChange}
        value={form.password}
        autocomplete="true"
      >
        Password
      </Input>

      <Button>Daftar</Button>
    </form>
  );

  if (type === "signin") {
    return formsignin;
  } else {
    return formsignup;
  }
};

export default Form;
