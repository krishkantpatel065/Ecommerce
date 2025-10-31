import { NavLink } from "react-router-dom";
import "../styleFolder/AddToCarts.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function AddToCart() {
  const selector = useSelector((state) => state.cart.value);
  //cart is equal to a cart in store

  console.log(selector);

  return (
    <div className="carts">
      <NavLink to="/order">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="carts-count">{selector}</span>
      </NavLink>
    </div>
  );
}

export default AddToCart;
