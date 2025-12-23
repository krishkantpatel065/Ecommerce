import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router";
import { Suspense } from "react";
import Home from "./screens/home";
import Login from "./screens/Login";
import Navbar from "./components/navbar";

import PageNotFound from "./screens/PageNotFound";
import SignUp from "./screens/SignUp";
import Order from "./screens/order";
import { AuthProvider } from "./context/AuthContext";
import Thankyou from "./components/Thankyou";
import OrderHistory from "./components/OrderHistory";
import ProductDetail from "./components/ProductDetail";
import Loader from "./components/Loader"
import UserProfile from "./screens/UserProfile";
import BillingPage from "./components/BillingPage";
import WishList from "./screens/WishList";
const Product = lazy(()=> import ("./components/Product"))
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
        <Route path="/profile"  element={<UserProfile />}/>
        <Route path="/order/:id/:name?" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Suspense fallback={<h1>Loading.........?</h1>}> <Product searchTerm={searchTerm} /></Suspense>} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/profile/orderhistory" element={<OrderHistory />} />
        <Route path="/product/wishlist" element={<WishList/>}/>
        <Route path="/loader" element={<Loader />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
