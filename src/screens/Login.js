import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {useAuth}  from "../context/useAuth"
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const errorType = {};
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const validate = () => {
    if (!formData.name.trim()) errorType.name = "Name is required";
    if (!formData.email.trim()) errorType.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errorType.email = "Enter valid email.";

    if (!formData.password.trim()) errorType.password = "Password is required";
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(formData.password))
      errorType.password =
        "Weak password (need upper, lower, number, 8+ chars)..";
    return errorType;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formsError = validate();

    // const savedUser = JSON.parse(localStorage.getItem("user"));
    // const LoggedInUser = savedUser.find(
    //   (user) =>
    //     user.email === formData.email && user.password === formData.password
    // );
    // if (LoggedInUser) {
    //   toast("You Have Already Account please Signin");
    //   return;
    // }
    setError(formsError);
    if (Object.keys(formsError).length === 0) {
      const token = "token_" + Date.now();
      const user = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        role: "user", // optional
      };
      login({user,token});
      toast.success("Login Successful", {
        hideProgressBar: true,
      });
      navigate("/");
    }
  };
  const togglePassword = () => {
    console.log("check", showPassword.type === "password");
    setShowPassword((prev) => !prev);
  };
  let save = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex py-[56px] w-full">
      <div className="w-[50%]">
        <img
          src="/assets/login.png"
          alt="login"
          className="w-[650px] h-[420px] "
        />
      </div>
      <div className="flex flex-col gap-2 p-10 w-[50%] ">
        <div>
          <h1 className="leading-4 text-2xl tracking-wide mb-5 font-medium">
            Log in to Exclusive
          </h1>
          <p className="text-sm">Enter your detail below</p>
        </div>
        <div className="flex flex-col  gap-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="text-[black] text-sm mt-1 border-b border-[#7f7f7f] mb-1  outline-none w-[75%] "
          />
          {error.name && (
            <p className="mt-[-7px] text-[12px] text-red-600">{error.name}</p>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="text-[black] text-sm border-b border-[#7f7f7f] w-[75%] mb-1 outline-none "
          />
          {error.email && (
            <p className="mt-[-7px] text-[12px] text-red-600">{error.email}</p>
          )}
          <div className="flex justify-between gap-0  border-b border-[#7f7f7f] w-[75%]">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="text-[black] text-sm w-[75%]  outline-none "
            />
            <button
              onClick={togglePassword}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {error.password && (
            <p className="mt-[-7px] text-[12px] text-red-600">
              {error.password}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center w-[75%]">
          <button
            className="py-1 px-5 text-white rounded-sm bg-red-500"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <Link className="text-blue-800">Forget Password?</Link>
        </div>
        {/* <div>Already have Account? <Navlink to="sign"></Navlink></div> */}
      </div>
    </div>
  );
}

export default Login;
{
  /* <p className="login-footer">
    //         Don’t have an account?
    //         <span onClick={() => navigate("/signup")} className="signup-link">
    //           Create Account
    //         </span>
    //       </p> */
}
