import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProduct = createAsyncThunk("products", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const jsonResp = await resp.json();
  console.log(jsonResp);

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
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.items = action.items);
    });
  }
});
export default productSlice.reducer

