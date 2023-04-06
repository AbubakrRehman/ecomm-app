import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.totalQuantity++;

            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    ...action.payload, quantity: 1, totalPrice: newItem.price
                })
                state.totalPrice = state.items.reduce((acc, currItem) => acc += currItem.price * currItem.quantity, 0);
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalPrice = state.items.reduce((acc, currItem) => acc += currItem.price * currItem.quantity, 0);
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
                state.totalPrice = state.items.reduce((acc, currItem) => acc += currItem.price * currItem.quantity, 0);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                state.totalPrice = state.items.reduce((acc, currItem) => acc += currItem.price * currItem.quantity, 0);
                // existingItem.price=existingItem.price-existingItem

            }
        },
        clearItemFromCart(state, action) {
            const newItem = action.payload;
           state.items = state.items.filter((item) => item.id !== newItem.id);
            state.totalQuantity-=newItem.quantity;
            state.totalPrice=state.items.reduce((acc, currItem) => acc += currItem.price * currItem.quantity, 0);
          

        }
    }
}
)


export const cartActions = cartSlice.actions;
export default cartSlice;