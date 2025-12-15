import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/home";
import Login from "./screens/Login";
import Navbar from "./components/navbar";
import Product from "./components/Product";
import PageNotFound from "./screens/PageNotFound";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Order from "./screens/Order";
import { AuthProvider } from "./context/AuthContext";
import Catogary from "./components/categary";
import Thankyou from "./components/Thankyou";
import OrderHistory from "./components/OrderHistory";
import ProductDetail from "./components/ProductDetail";
import { Suspense } from "react";
import UserProfile from "./screens/UserProfile";
import BillingPage from "./components/BillingPage";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  return (
    <AuthProvider>
      <Navbar onSearch={setSearchTerm} />
      <Routes basename="/boat">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order/:id/:name?" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product searchTerm={searchTerm} />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/profile/orderhistory" element={<OrderHistory />} />
       
        <Route path="/edituser" element={<UserProfile />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
