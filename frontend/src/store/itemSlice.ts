import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Не дописан

type InitialState = {
    value: CartState
}

type CartState = {
    isCart: boolean,
    items: any
}

const initialState = {
    value: {
        isCart: false,
        items: []
    } as CartState
} as InitialState;

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action:PayloadAction<any>) => {
            const itemChange = state.value.items.find((item: any) => item.id === action.payload.id)

            if (itemChange !== undefined) {
                
            } else {
                state.value.items.push(action.payload);
                state.value.isCart = true;
            };  
        },
        changeItem: (state, action:PayloadAction<any>) => {
            let itemChange = state.value.items.find((item: any) => item.id === action.payload.id);
            
            // itemChange.quantity = action.payload.quantity.quantity;
        },
        subtractItem: (state, action:PayloadAction<any>) => {
            let itemChange = state.value.items.find((item: any) => item.id === action.payload.id);
            
            if (itemChange.quantity !== 0) {
                itemChange.quantity -= 1;
                itemChange.priceQuantity = itemChange.price * itemChange.quantity;
            } else {
                itemChange.quantity = 0;
            }
        },
        incItem: (state, action:PayloadAction<any>) => {
            let itemChange = state.value.items.find((item: any) => item.id === action.payload.id);
            
            itemChange.quantity += 1;
            itemChange.priceQuantity = itemChange.price * itemChange.quantity;
        },
        removeItem: (state, action:PayloadAction<any>) => {
            state.value.items = state.value.items.filter((item:any) => item.id !== action.payload.id);
        },
        clearAll: () => {
            return initialState;
        }
    }
});

export const {addItem, changeItem, subtractItem, incItem, removeItem, clearAll} = cartSlice.actions;
export default cartSlice.reducer;