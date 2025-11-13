import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice"
import counter from "./slice2"
import productReducer from "./ProductSlice"
const Store = configureStore({
    reducer:{
        cart:cartReducer,
        products:productReducer,
        counter:counter
    }
})
export default Store;