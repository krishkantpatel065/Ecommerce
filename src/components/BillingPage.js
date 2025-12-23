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
  const [paymentMode, setPaymentMode] = useState("");
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
  });
  const handleChange = (e) => {
    setPaymentMode(e.target.value);
  };
  console.log(paymentMode);

  const cartItems = useSelector((state) => state.cart.items);

  const placeOrder = () => {
    if (cartItems.length === 0) {
      return alert("Your cart is empty!");
    }
    if (!paymentMode) {
      toast.error("Please Select Payment Option");
      return;
    }
    if (
      !userDetail.name ||
      !userDetail.email ||
      !userDetail.city ||
      !userDetail.number
    ) {
      toast.error("Enter User Detail");
      return;
    }
    if (!userDetail.email) {
      toast.error("enter email");
      return;
    } else if (!/\S+@\S+\.\S+/.test(userDetail.email)) {
      toast.error("invalid email");
      return;
    } // /\S+\@\S+\.\S+\
    const orderDetails = {
      id: Date.now(),
      user: userDetail,
      items: cartItems,
      total: totalPrice,
      payment: paymentMode,
      date: new Date().toISOString(),
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
  // console.log(cartItems);

  return (
    <div className="max-w-6xl mx-auto px-10 py-8">
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-gray-700 text-sm">
          <Link to="/producr">Product</Link>
          <span className="text-semi-bold mx-1">/</span>
          <Link to="/order">Cart</Link>
          <span className="text-normal mx-1">/</span>
          <Link className="text-bold text-black">CheckOut</Link>
        </h3>
      </div>
      <div>
        <h1 className="text-4xl font-normal mb-10 mt-8"> Billing Details</h1>
      </div>
      <div className="flex w-full ">
        <InputForm userDetail={userDetail} setUserDetail={setUserDetail} />
        <div className=" w-[527px]  ">
          <div className="">
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <div
                  className="flex items-center justify-between mb-1"
                  key={item.id}
                >
                  <div className="flex items-start gap-3">
                    <img src={item.image} alt="fcdc" className="w-11 h-10" />
                    <h2 className="text-sm font-normal">
                      {item.title.slice(0, 10)}
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
          <div className="">
            <Subtotal showTotal={false} total={totalPrice} />
          </div>
          <div className="mb-1 flex justify-between h-[28px]">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMode"
                value="UPI"
                id="upi"
                onChange={handleChange}
              />
              <label htmlFor="upi" className="text-[11px]">
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
            <input
              type="radio"
              name="paymentMode"
              id="cod"
              value="Cash on delivery"
              onChange={handleChange}
            />
            <label htmlFor="cod" className="text-[11px]">
              Cash on delivery
            </label>
          </div>
          <div className="mt-4 mb-4 w-full        ">
            <ApplyCoupon />
          </div>
          <div>
            <button
              className="py-1 bg-red-500 text-white text-sm px-4"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
