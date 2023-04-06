import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: []
    },
    reducers: {
        setProducts(state, action) {
            const products = action.payload;
            state.items = products;
        }
    }
});

export const fetchProductsData = () => {
    return async (dispatch) => {
        const productsJson = await fetch("https://fakestoreapi.com/products");
        const products = await productsJson.json();
        dispatch(productsSlice.actions.setProducts(products));
    }
}
export const productActions = productsSlice.actions;
export default productsSlice;