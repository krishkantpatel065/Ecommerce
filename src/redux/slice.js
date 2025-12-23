import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  wish: localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : []
};
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //actions
    addItem: (state, action) => {
      // console.log(state.items);
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
    addWish: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.wish.push(...action.payload);
      }else{
         state.wish.push(action.payload )
      }
     
      localStorage.setItem("wish", JSON.stringify(state.wish));
      // alert("rfe")
    },
    removeWish:(state,action)=>{
      state.wish = state.wish.filter((i)=>i.id !== action.payload);
      localStorage.setItem("wish",JSON.stringify(state.wish))
    },
    clearWish:(state,action)=>{
      state.wish=[];
      localStorage.removeItem("wish")
    }
  },
});

export const { addItem, removeItem, clearWish, clearCart, addWish,removeWish } = addToCart.actions;
export default addToCart.reducer;
