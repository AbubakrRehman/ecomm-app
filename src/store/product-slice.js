import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        item: {},
        notification: null
    },
    reducers: {
        setProduct(state, action) {
            const product = action.payload;
            state.item = product;
        },
        showNotification(state, action) {
            const { title, message, status } = action.payload;
            state.notification = action.payload;
        },
        clearProductData(state) {
            state.item = {};
        }
    }
});

export const fetchProductData = (productId) => {
    return async (dispatch) => {
        async function fetchData(productId) {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!response.ok) {
                throw new Error("Could not fetchData");
            }
            const data = await response.json();
            return data;
        }

        try {
            dispatch(productSlice.actions.showNotification({
                title: "pending",
                message: "Loading...",
                status: "pending"
            }))
            const product = await fetchData(productId);
            dispatch(productSlice.actions.showNotification({
                title: "success",
                message: "Product Data loaded successfully!!!",
                status: "success"
            })
            )

            dispatch(productSlice.actions.setProduct(product));
        }
        catch (err) {
            dispatch(productSlice.actions.showNotification({
                title: "error",
                message: err.message,
                status: "error"
            }))
        }

    }
}


export const productActions = productSlice.actions;
export default productSlice;