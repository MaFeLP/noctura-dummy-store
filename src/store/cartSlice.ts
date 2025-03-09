import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItemOptions {
    temperature: string | null;
    smartHome: boolean;
    filling: string;
    bedding: string;
    speaker: boolean;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    options: CartItemOptions;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<CartItem>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },

        removeItemFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }

                state.totalQuantity--;
                state.totalAmount -= existingItem.price;
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
