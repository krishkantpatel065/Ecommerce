import { useState } from "react";
import { clearCart, removeItem, addItem } from "../redux/slice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApplyCoupon from "../components/ApplyCoupon";
import Subtotal from "../components/Subtotal";
import EmptyCart from "../components/EmptyCart";
function Order() {
  const dispatch = useDispatch();
  
  
  const cartItems = useSelector((state) => state.cart.items);
  // const {items} = useSelector((state) => state.cart);

  
  function trimText(text, maxLength = 100) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }
  const Total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <div className="p-10 ">
        <div className="mt-5 px-10">Home/Cart</div>
        {cartItems.length > 0 ? (
          <div className="px-[40px] py-5 flex flex-col w-full mt-5">
            <div className="mb-10">
              <div className="mb-4">
                <div className="flex justify-between shadow-md px-10 py-3">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                </div>
                <div className="h-[100px] overflow-y-auto" id="scroll">
                  {cartItems.length > 0 &&
                    cartItems.map((item) => (
                      <div className="flex justify-between items-center shadow-md px-10 py-4 rounded-sm w-full mt-5 mb-5">
                        <div className="flex items-center gap-2 w-[100px]">
                          <img
                            src={item.image}
                            alt="laptop"
                            className="w-[31px] h-[39px] "
                          />
                          <h2 className="text-[16px] font-normal ">
                            {trimText(item.title, 5)}
                          </h2>
                        </div>
                        <div className="w-[90px]">
                          <h3>₹{item.price}/-</h3>
                        </div>
                        <div className="flex items-center w-[80px] ">
                          <span
                            className="text-lg px-1 cursor-pointer"
                            onClick={() => dispatch(addItem(item))}
                          >
                            +
                          </span>
                          <h3>{item.quantity}</h3>
                          <span
                            className="text-lg px-1 cursor-pointer"
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            -
                          </span>
                        </div>
                        <div className="w-[80px] font-medium">
                          <h3>₹{(item.price * item.quantity).toFixed(2)}/-</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between ">
                  <Link to="/product">
                    <button className="px-5 py-2 bg-red-500 text-[12px] text-white rounded-sm">
                      Return To Cart
                    </button>
                  </Link>
                  <button className="px-5 py-2 bg-red-500 text-[12px] text-white rounded-sm">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <ApplyCoupon  />
              <Subtotal total={Total}   show={true} />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
}

export default Order;
