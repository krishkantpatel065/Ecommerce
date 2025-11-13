import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styleFolder/loginStyle.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  let number = "91310";
  for (let i = 1; i <= 5; i++) {
    number += Math.floor(Math.random() * 10);
  }
  console.log(number);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) newError.name = "Name is required";
    if (!formData.email.trim()) newError.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newError.email = "Enter valid email.";

    if (!formData.password.trim()) newError.password = "Password is required";
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(formData.password))
      newError.password =
        "Weak password (need upper, lower, number, 8+ chars)..";
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formsError = validate();
    // const { name, email, password } = formData;

    setError(formsError);
    if (Object.keys(formsError).length === 0) {
      login({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        number: number,
      });
      alert("Login Successful");
      navigate("/");
    }
  };
  const togglePassword = () => {
    console.log("check", showPassword.type === "password");
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue shopping</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="login-input"
          />
          {error.name && <p className="login-error">{error.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
          />
          {error.email && <p className="login-error">{error.email}</p>}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "308px",
              border: "1.5px solid rgb(207, 216, 220)",
              borderRadius: "8px",
              padding: "8px 5px",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
              }}
              // className={`login-input ${error.password ? "input-error" : ""}`}
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
          {error.password && <p className="login-error">{error.password}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="login-footer">
            Don’t have an account?
            <span onClick={() => navigate("/signup")} className="signup-link">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
