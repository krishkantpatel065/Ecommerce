import { useEffect,useState } from "react";
import { clearCart, removeItem } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import "../styleFolder/Order.css";
function Order() {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  useEffect(() => {
    let cartDetail = localStorage.getItem("AddToCart");
    setState(cartDetail);
  });
  const cartItems = useSelector((state) => state.cart.val);

  return (
    <div className="ListDiv">
      <h2>Order Page</h2>
      {state}
      <ul>{cartItems && <pre>{JSON.stringify(cartItems, null, 2)}</pre>}</ul>
      <button className="Clearbutton" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
      <button className="Clearbutton" onClick={() => dispatch(removeItem())}>
        Remove Cart
      </button>
    </div>
  );
}

export default Order;
