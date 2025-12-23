import React from "react";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="text-center mt-10 ">
      {/* <div className=" flex items-start flex-col">
        <img
          src="/emptycart.webp"
          alt="your cart is empty"
          className="w-[50%] h-[50%]"
        />
      </div> */}
      
      <div className=" text-md mt-3 font-normal text-black">
        Your cart is empty!
      </div>
      <div className=" text-sm mt-3 font-normal text-black">
        Add item to it now.
      </div>
      <button className="mt-3 py-2 px-6 bg-red-600 rounded-md">
        <Link to="/product" style={{ textDecoration: "none", color: "white" }}>
          Shop Now
        </Link>
      </button>
    </div>
  );
};

export default EmptyCart;
