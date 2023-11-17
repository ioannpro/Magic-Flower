import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './itemSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store