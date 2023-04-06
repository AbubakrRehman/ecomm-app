import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";
import productSlice from "./product-slice";
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        product: productSlice.reducer

    }
});


export default store;