import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  val: [],
};
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //actions
    addItem: (state, action) => {
      state.value += 1;
       state.val.push(action.payload);
       let cartDetail = {value}
       localStorage.setItem("AddToCart",JSON.stringify(cartDetail))
    },
    removeItem: (state,action) => {
      if (state.value > 0) {
        state.value -= 1;
        state.val.pop(action.payload);
      }
    },
    clearCart: (state,action) => {
      state.value = 0;
      state.val = []

    },
   
  },
});

export const { addItem, removeItem, clearCart } = addToCart.actions;
export default addToCart.reducer;
