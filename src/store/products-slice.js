import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        notification: null
    },
    reducers: {
        setProducts(state, action) {
            const products = action.payload;
            state.items = products;
        },
        showNotification(state, action) {
            const { title, message, status } = action.payload;
            state.notification = action.payload;
        }
    }
});

export const fetchProductsData = () => {
    return async (dispatch) => {
        async function fetchData() {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error("Could not fetchData");
            }
            const data = await response.json();
            return data;
        }

        try {
            dispatch(productsSlice.actions.showNotification({
                title: "pending",
                message: "Loading...",
                status: "pending"
            }))
            const products = await fetchData();
            dispatch(productsSlice.actions.showNotification({
                title: "success",
                message: "Products Data loaded successfully!!!",
                status: "success"
            })
            )

            dispatch(productsSlice.actions.setProducts(products));
        }
        catch (err) {
            dispatch(productsSlice.actions.showNotification({
                title: "error",
                message: err.message,
                status: "error"
            }))
        }

    }
}


export const productActions = productsSlice.actions;
export default productsSlice;