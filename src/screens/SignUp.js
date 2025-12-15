import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styleFolder/signup.css";
import { AuthContext } from "../context/AuthContext";
function SignUp() {
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();
  const [signUpform, setSignUpform] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  let save = JSON.parse(localStorage.getItem("user"));
  console.log(save);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpform({ ...signUpform, [name]: value });
  };
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const FindError = () => {
    const errors = {};

    if (!signUpform.name) {
      errors.name = "Name is required";
    }
    if (!signUpform.email) {
      errors.email = "Email is not valid";
    }
    if (!signUpform.password) {
      errors.password = "Password is not valid";
    }
    if (!signUpform.number) {
      errors.number = "Number is not valid";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errrobj = FindError();
    setError(errrobj);

    if (Object.keys(errrobj).length > 0) {
      return;
    }

    signup({
      name: signUpform.name,
      email: signUpform.email,
      password: signUpform.password,
      number: signUpform.number,
    });

    alert("Sign Up Successful");
    navigate("/");
  };

  return (
    <div className="singup-page">
      <div className="singup-card">
        <h2 className="singup-title">Create Account </h2>

        <form onSubmit={handleSubmit} className="singup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={signUpform.name}
            onChange={handleChange}
            className="singup-input"
          />
          {error.name && <p className="singup-error">{error.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={signUpform.email}
            onChange={handleChange}
            className="singup-input"
          />
          {error.email && <p className="singup-error">{error.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUpform.password}
            onChange={handleChange}
            className="singup-input"
          />
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
              placeholder="Conform Password"
              value={signUpform.password}
              onChange={handleChange}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
              }}
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
          <input
            type="number"
            name="number"
            placeholder="Enter Number"
            value={signUpform.number}
            onChange={handleChange}
            className="singup-input"
          />
          {error.number && <p className="singup-error">{error.number}</p>}

          <button type="submit" className="singup-btn">
            Sign Up
          </button>

          <p className="singup-footer">
            Already have an account?
            <span onClick={() => navigate("/login")} className="login-link">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
