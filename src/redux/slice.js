import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  value: 0,
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  // items:[]
};
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //actions
    addItem: (state, action) => {
      const exiting = state.items.find(
        (item) => String(item.id) === String(action.payload.id)
      );
      if (exiting) {
        exiting.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const deta = state.items.find(
        (i) => String(i.id) === String(action.payload)
      );
      if (deta) {
        if (deta.quantity > 1) {
          deta.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => String(i.id) !== String(action.payload)
          );
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, clearCart } = addToCart.actions;
export default addToCart.reducer;
