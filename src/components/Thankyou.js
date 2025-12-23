import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(8);
  useEffect(() => {
    if (time === 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full shadow-2xl bg-white p-8 rounded-lg text-center">
        <h1 className="text-2xl font-semibold mb-2">
          🎉 Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-4">Your items will be delivered soon.</p>
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/profile/orderhistory">
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              See Order
            </button>
          </Link>
          <Link to="/product">
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded">
              Continue Shopping
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          Back to home in <b>{time}</b> seconds
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
