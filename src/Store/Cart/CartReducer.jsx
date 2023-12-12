import { PRODUCT_COUNTER } from "./CartTypes"


export const Cart_Reducer = (state = 0 ,action) => {

    switch(action.type){
        case  PRODUCT_COUNTER : 
           return state = state + action.payload
        default: return state
      }
}