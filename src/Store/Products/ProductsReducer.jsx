import { Get_PRODUCTS } from "./ProductsTypes";


export const Product_Reducer = (state=[] , action)=>{

    switch(action.type){
        case Get_PRODUCTS :
            return [...action.payload]
        
            default:
                return state
    }

}