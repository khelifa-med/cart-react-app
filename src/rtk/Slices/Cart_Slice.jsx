import { createSlice } from "@reduxjs/toolkit";


export const Cart_Slice = createSlice({

    initialState: [],

    name: 'Cart_Slice',

    reducers: {
        Add_Product : (state,action)=>{
          let findProduct = state.find((product)=> product.id === action.payload.id)
          
          if(findProduct){
            findProduct.quontity +=1 
          }else{
            let clone = {...action.payload , quontity:1}
            state.push(clone)
          }
           
        },

        DeleteFromCart : (state,action)=>{
          return  state.filter((product) =>  product.id != action.payload.id)
        },

        Clear : (state,action)=>{
           return state = []
        }
    }
})


export const {Add_Product,DeleteFromCart,Clear} = Cart_Slice.actions
export default Cart_Slice.reducer


