import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Subtotal = ({ total, show }) => {
  const { applied } = useSelector((state) => state.coupon)
  

  let offer = applied ? total - 30 : total;

  return (
    <div className={`p-4 rounded-md  ${show ? 'shadow-lg' : ''}  ${show ? ' w-[30%]' : 'w-full'}`}>
      {show && <h1 className="text-md font-normal">Cart Total</h1>}
      <div className="flex justify-between  mt-4 border-b border-[#7f7f7f]">
        <h3 className="text-[12px] mb-2">SubTotal:</h3>
        <h3 className="text-sm">₹{total}/-</h3>
      </div>
      <div className="flex justify-between  mt-4 border-b border-[#7f7f7f]">
        <h3 className="text-[12px] mb-2">Shipping:</h3>
        <h3 className="font-normal " >free</h3>
      </div>
      {applied && (
        <div className="flex justify-between mt-4 border-b border-[#7f7f7f]">
          <h3 className="text-[12px] mb-2">You Save:</h3>
          <h3 className="font-normal text-[12px]">₹30/-</h3>
        </div>
      )}
      <div className="flex justify-between mt-4 border-b border-[#7f7f7f]">
        <h3 className="text-[12px] mb-2">Total:</h3>
        <h3 className="font-normal text-sm">₹{offer}/-</h3>
      </div>
      {show && (
        <div className="flex items-center">
          <Link
            to="/billing"
            className="py-1 px-6 font-normal bg-red-500 rounded-sm text-white text-sm mt-4 text-center mx-auto"
          >
            Process To Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Subtotal;
