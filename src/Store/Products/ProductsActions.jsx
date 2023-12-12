import { Get_PRODUCTS } from "./ProductsTypes";


export const Get_Products  =(Products)=> {

    return{
        type : Get_PRODUCTS,
        payload : Products
    }
}


export const Fetch_Products = () =>{

    return async (dispatch) =>{

        fetch('http://localhost:8000/catProducts')
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
           dispatch(Get_Products(data))
        }
        )
    }
}