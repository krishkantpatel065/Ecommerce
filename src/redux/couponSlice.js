import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  applied: false,
  message: "",
  type: "",
};
const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon(state, action) {
      const code = action.payload;
      console.log(code);
      
      if (!code) {
        state.type = "error";
        state.message = "Enter Coupon Code";
        return;
      }
      if (state.applied) {
        state.type = "info";
        state.message = "Coupon Already Applied";
        return;
      }
      if (code === "SAVE500") {
        state.applied = true;
        state.type = "success";
        state.message = "Coupon Applied | You save ₹50  ";
      } 
      else{
        state.type="error";
        state.message="Invalid Coupon"
      }
    },
    resetCoupon(state){
        state.applied=false;
        state.type="";
        state.message=""
    }
  },
});
export const{applyCoupon,resetCoupon} = couponSlice.actions;
export default couponSlice.reducer;
