import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart_quantity:9
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{}
})

export const getcartQuantity = (state) => state.cart.cart_quantity

export default cartSlice.reducer