import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./screens/home";
import Login from "./screens/Login";
import Navbar from "./components/navbar";
import Product from "./components/Product";
import PageNotFound from "./screens/PageNotFound";
import Profile from "./screens/profile";
import SignUp from "./screens/SignUp";
import Order from "./screens/order";
import { AuthProvider } from "./context/AuthContext";
import Counter from "./components/Counter";

function App() {
  return (
    // <Counter />
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
