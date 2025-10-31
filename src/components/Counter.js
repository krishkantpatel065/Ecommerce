import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset, incrementByAmount } from "../redux/slice2";
import { preconnect } from "react-dom";

function Counter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counter.value);
  const cartItems = useSelector((state) => state.counter.val);
  const handleAdd = () => {
    // Here we send data as payload
    const product = { id: 1, name: "Shoes", price: 999 };
    dispatch(incrementByAmount(product)); // ✅ payload = product
  };
  return (
    <div>
      <h1>{selector}</h1>
      {/* <h3>{cartItems}</h3> */}
      <button onClick={() => dispatch(increase(1))}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={handleAdd}>Add to Cart</button>
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
    </div>
  );
}

export default Counter;
