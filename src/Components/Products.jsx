
import { useDispatch, useSelector } from "react-redux"
import Product_Item from "./Product_Item"

import { useEffect, useState } from "react"
import { Fetch_Products } from "../rtk/Slices/Products_Slice"

function Products()
{
    

    let products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Fetch_Products())
},[])
   
    return(
        <div className="continaire">
         <h1>Products</h1>

         <div className="row mt-4">
              {
                products.map((product)=>{
                   return <Product_Item key={product.id} product={product}/>
                })
              }
                 

         </div>


        </div>

        

        
    )
}


export default Products