
import { configureStore } from '@reduxjs/toolkit'
import Products_Slice from './Slices/Products_Slice'
import Cart_Slice from './Slices/Cart_Slice'


export const store = configureStore({
  reducer: {
    products : Products_Slice,
    cart: Cart_Slice,
  

  }
})