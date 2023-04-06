import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    ...action.payload, quantity: 1, totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                // existingItem.price=existingItem.price-existingItem

            }
        }
    }
}
)


export const cartActions = cartSlice.actions;
export default cartSlice;