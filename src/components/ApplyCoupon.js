import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { applyCoupon } from "../redux/couponSlice";

const ApplyCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.coupon);
  const state = useSelector((state) => state.coupon);

  const handleCoupon = () => {
    dispatch(applyCoupon(couponCode));
    // console.log(message);
    // console.log(type);
  };
  useEffect(() => {
    if (!message) {
      return;
    }
    if (type === "success") {
      toast(
        <div>
          <strong>Coupon Applied </strong>
          <p>You saved ₹30 🎉</p>
        </div>,
        {
          hideProgressBar: true,
        }
      );
    }
    if (type === "error") {
      toast.error(message, { hideProgressBar: true });
    }

    if (type === "info") {
      toast.info(message, {
        style: { color: "red", border: "none" },
      });
    }
  }, [type, message]);

  return (
    <div className="flex justify-between items-start w-full flex-col md:flex ">
      <div className="flex gap-5">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Coupon Code"
          className="py-1 px-6 text-sm font-normal border border-[#7f7f7f] rounded-sm text-black outline-none"
        />
        <button
          className="px-5 py-1 bg-red-500 text-[12px] text-white rounded-sm"
          onClick={handleCoupon}
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
