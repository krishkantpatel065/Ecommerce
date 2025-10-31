import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  val:[]
};
const Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.val.push(action.payload);  // increase by given number
    },
  },
});
export const {increase,decrease,reset,incrementByAmount} = Counter.actions
export default Counter.reducer