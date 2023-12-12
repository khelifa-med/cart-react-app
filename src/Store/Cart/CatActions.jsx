import { PRODUCT_COUNTER } from "./CartTypes"


export const Add_Product = (amount)=>{
    return {
        type : PRODUCT_COUNTER,
        payload : amount
    }
}