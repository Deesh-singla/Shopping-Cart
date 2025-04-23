import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        append: (state, action) => {
            const existingItem = state.value.find(x => x.title === action.payload.title);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.value.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            console.log(action)
            const existingItem = state.value.find(x => x.title === action.payload.title);
            existingItem.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const existingItem = state.value.find(x => x.title === action.payload.title);
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        },
        remove: (state, action) => {
            state.value = state.value.filter(x => x.title !== action.payload.title);
        }
    }
})
export const { append, incrementQuantity, decrementQuantity, remove } = cartReducer.actions;
export default cartReducer.reducer