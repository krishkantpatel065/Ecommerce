import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApplyCoupon from "../components/ApplyCoupon";
import Subtotal from "../components/Subtotal";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";
import { AuthContext } from "../context/AuthContext";
import InputForm from "./InputForm";

const BillingPage = () => {
  const { user, totalPrice } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState("COD");
  const cartItems = useSelector((state) => state.cart.items);
  // const totalPrice = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // ).toFixed(2);
  const placeOrder = () => {
    if (cartItems.length === 0) {
      return alert("Your cart is empty!");
    }
    const orderDetails = {
      id: Date.now(),
      user: user,
      items: cartItems,
      // total: Total,
      payment: paymentMode,
      date: new Date().toLocaleString(),
    };
    const existingOrder =
      JSON.parse(localStorage.getItem("orderDetails")) || [];
    localStorage.setItem(
      "orderDetails",
      JSON.stringify([orderDetails, ...existingOrder])
    );

    toast("🎉 Order placed successfully!");
    dispatch(clearCart());
    navigate("/thankyou");
  };
  console.log(cartItems);

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-gray-700 text-md">
          <Link to="/producr">Product</Link>
          <span className="text-semi-bold mx-1">/</span>
          <Link to="/order">Cart</Link>
          <span className="text-semi-bold mx-1">/</span>
          <Link className="text-bold text-black">CheckOut</Link>
        </h3>
      </div>
      <div className="flex w-full">
        <InputForm />
        <div className=" w-[527px]  ">
          <div className="mb-2">
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <img src={item.image} alt="fcdc" className="w-11 h-10" />
                    <h2 className="text-sm font-normal">
                      {item.title.slice(0, 8)}
                    </h2>
                  </div>
                  <div className="flex ">
                    <h2 className="text-sm font-normal">{item.quantity}</h2>
                  </div>
                  <div className="flex ">
                    <h2 className="text-sm font-normal">₹{item.price}/-</h2>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-0 w-full">
            <Subtotal show={false} total={totalPrice} />
          </div>
          <div className="mb-1 flex justify-between h-[28px]">
            <div className="flex items-center gap-3">
              <input type="radio" name="payment" id="" />
              <label htmlFor="" className="text-[11px]">
                Bank
              </label>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/assets/Visa.png"
                alt="Visa"
                className="w-[25px] h-[15px]"
              />
              <img
                src="/assets/mastercard.png"
                alt="mastercard"
                className="w-[25px] h-[15px]"
              />
              <img
                src="/assets/card.png"
                alt="card"
                className="w-[25px] h-[15px]"
              />
              <img
                src="/assets/Bkash.png"
                alt="Bkash"
                className="w-[25px] h-[15px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" id="" />
            <label htmlFor="" className="text-[11px]">
              Cash on delivery
            </label>
          </div>
          <div className="mt-4 mb-4">
            <ApplyCoupon />
          </div>
          <div>
            <button className="py-1 bg-red-500 text-white text-sm px-4">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
