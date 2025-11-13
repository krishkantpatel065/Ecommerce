import { NavLink } from "react-router-dom";
import "../styleFolder/AddToCarts.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function AddToCart() {
  const cartIt = useSelector((state) => state.cart.items);
  // const cartIt = useSelector((state) => state.cart.items);
  //for one only
  //cart is equal to a cart in store
  const itemCount = useSelector((state) => state.cart.items?.length || 0);
  console.log(cartIt);
  return (
    <div className="carts">
      <NavLink to="/order">
        {/* <i className="fa-solid fa-cart-shopping"></i> */}
        <svg
          className="filled_cart"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.81 61.27"
          height="25"
          width="25"
        >
          <path
            className="header_cart_icon_svg"
            d="m40.1,14.94c1.23,0,2.39,0,3.55,0,3.37,0,5.45,2.06,5.67,5.44.36,5.61.8,11.22,1.2,16.83.35,4.86.69,9.73,1.03,14.59.1,1.42.24,2.84.27,4.26.04,2.24-1.44,4.26-3.57,4.92-.61.19-1.28.28-1.93.28-13.61.02-27.22.02-40.83,0-3.39,0-5.68-2.39-5.48-5.78.29-4.82.68-9.64,1.02-14.46.31-4.26.61-8.52.92-12.78.2-2.79.36-5.59.6-8.38.25-2.96,2.44-4.92,5.42-4.94,1.23,0,2.46,0,3.78,0-.31-4.59,1.21-8.4,4.64-11.38C19.09,1.2,22.29,0,25.88,0c4.04,0,7.52,1.48,10.31,4.42,2.77,2.92,4.01,6.44,3.91,10.52Zm-23.84-.05h19.31c.42-5.64-4.09-10.45-9.71-10.42-5.61.04-10.15,4.94-9.61,10.42Z"
          ></path>
        </svg>
        <span className="carts-count">
          <span>{itemCount} </span>
        </span>
      </NavLink>
    </div>
  );
}

export default AddToCart;
