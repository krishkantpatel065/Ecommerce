import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import couponReducer from "./couponSlice";
import counter from "./slice2";
import productReducer from "./ProductSlice";
const Store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    counter: counter,
    coupon: couponReducer,
  },
});
export default Store;
