import { useEffect, useState } from "react";
import { clearCart, removeItem, addItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "../styleFolder/Order.css";
import "../styleFolder/Allproducts.css";
function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState();

  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/product");
    }
  }, [cartItems, navigate]);
  return (
    <>
      <h2>Order Page</h2>
      <div className="grid">
        {cartItems.length > 0 ? (
          cartItems.map((elem) => (
            <div className="card" key={elem.id}>
              <img src={elem.image} alt="" />
              <div className="contents">
                <div className="title">{elem.title}</div>
                <div className="description">{elem.description}</div>
                <div className="price">₹{elem.price}</div>
                <div>Quentity:{elem.quantity}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <button
                  className="addCart"
                  onClick={() => dispatch(addItem(elem))}
                >
                  +
                </button>
                <button
                  className="addCart"
                  onClick={() => dispatch(removeItem(elem.id))}
                >
                  -
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Product Available</p>
        )}

        {/* <button className="Clearbutton" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
      <button className="Clearbutton" onClick={() => dispatch(removeItem())}>
        Remove Cart
      </button> */}
      </div>
    </>
  );
}

export default Order;
