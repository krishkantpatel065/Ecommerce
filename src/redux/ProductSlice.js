import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const jsonResp = await resp.json();
  return jsonResp;
});
const initialState = {
  items: [],
  status: undefined,
  error: null,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.items = action.payload;
      state.status = "rejected";
    });
  },
});
export default productSlice.reducer;
//createAynchTunk is a middle used in redux when we call api it takes two pararmeter firsr is name and second is a async function
//we use extraReducer function when we doing async operation and directly calling from ui component
//  it takses builder argument
// in a builder all the data comes  and we used builder.addCase for the case it also takes two parameter first is status and second is callabck function which takes state,action
