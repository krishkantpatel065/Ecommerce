// import React from "react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white">
//       <div className="flex gap-2">
//         <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
//         <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
//         <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse [animation-delay:-0.20s]"></div>
//       </div>
//     </div>

//   );
// };

// export default Loader;
import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slice";
export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userDetail, setUserDetail] = useState({
    name: "",
    city: "",
    number: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(userDetail);
  // console.log(userDetail.name);

  // const { user, totalPrice } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(cartItems);
  let totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // console.log(totalPrice);

  const placeOrder = () => {
    if (cartItems.length === 0) {
      return alert("Your cart is empty!");
    }

    if (
      !userDetail.name ||
      !userDetail.number ||
      !userDetail.city ||
      !userDetail.address
    ) {
      toast.error("Enter User Detail");
      return;
    }
    if (!paymentMethod) {
      toast.error("Please Select Payment Option");
      return;
    }
    const orderDetails = {
      id: Date.now(),
      user: userDetail,
      items: cartItems,
      total: totalPrice,
      payment: paymentMethod,
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
  const inputFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
       id: "text",
      placeholder: "Full Name",
    },
    {
      name: "city",
      label: "City",
      type: "text",
       id: "city",
      placeholder: "City",
    },

    {
      name: "number",
      label: "Phone",
      type: "number",
      id: "number",
      placeholder: "Phone",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
       id: "address",
      placeholder: "Address",
    },
  ];

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-6 p-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Payment Details</h2>

          <div className="space-y-2 mb-3">
            {inputFields.map((input) => (
              <div key={input.id}>       
                <label>{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                  id={input.id}
                  placeholder={input.placeholder}
                  onChange={handleChange}
                  value={userDetail[input.name]}
                  className="w-full border rounded-lg px-4 py-1"
                />
              </div>
            ))}
          </div>

          <h3 className="font-sm mb-2">Payment Method</h3>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              Online Payment
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
          </div>

          <button
            onClick={placeOrder}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600"
          >
            Place Order
          </button>
        </div>

        <div className="bg-gray-50 rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <div className="flex justify-between text-sm" key={item.id}>
                <div className="flex gap-2" >
                  <img src={item.image} alt="" className="w-11 h-10" />
                  <h3>{item.title.slice(0, 10)}</h3>
                </div>
                <span> x {item.quantity}</span>
               <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
