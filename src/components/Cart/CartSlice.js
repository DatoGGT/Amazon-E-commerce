import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        setAddInCart (state, action) {
            state.cartItems = action.payload
        },
        setPostInCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        }
    }
})



export const { setAddInCart, setPostInCart} = CartSlice.actions
export default CartSlice.reducer