import { NavLink } from "react-router-dom";
import "../styleFolder/AddToCarts.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function WishCount() {
  const {wish} = useSelector((state) => state.cart || 0);
  return (
    <div className="carts">
      <NavLink to="/product/wishlist">
        <i className="fa-regular fa-heart text-[26px]"></i>
        <span className="carts-count">
          <span>{wish.length} </span>
        </span>
      </NavLink>
    </div>
  );
}

export default  WishCount;
