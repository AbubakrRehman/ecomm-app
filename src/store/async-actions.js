import productsSlice from "./products-slice";

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