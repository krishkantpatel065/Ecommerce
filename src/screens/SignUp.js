import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styleFolder/signup.css";
import { AuthContext } from "../context/AuthContext";
function SignUp() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [signUpform, setSignUpform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { user, signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpform({ ...signUpform, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signUpform.email || !signUpform.password || !signUpform.name) {
      alert("Please fill all fields");
      setError("Please fill all fields");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user")) || [];
    if (user.find((u) => u.email === signUpform.email)) {
      setError("User already exists");
      return;
    }

    // const newUser = { name, email, password };
    // user.push(newUser);
    // localStorage.setItem("user", JSON.stringify(user));
    signup({
      name: signUpform.name,
      email: signUpform.email,
      password: signUpform.password,
    });
    navigate("/");
    alert("Sign Up Successful");
    console.log("signnnn");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <form onSubmit={handleSubmit} className="signUp-form">
          <h2>Sign Up Page</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={signUpform.name}
            className="signup-input"
            onChange={handleChange}
            name="name"
          />

          <label htmlFor="email">Email:</label>
          <input
            className="signup-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signUpform.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="signup-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={signUpform.password}
            onChange={handleChange}
          />

          <button type="submit" className="signupButton">
            Sign Up
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
