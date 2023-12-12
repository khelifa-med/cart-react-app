import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { Add_Product } from "../rtk/Slices/Cart_Slice"


export default function ProductDetails (){
    let {id} = useParams()
    const [product,setProduct] = useState([])

    const dispatch =useDispatch()
   

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data)
                setProduct(data)
            }
            )
    },[])


    

    
    return (
        <div className="row" >
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">
                   <img src={product.image} className="card-img-top" alt="..."/>
                </div>
                </div>
            </div>
            <div className="col-sm-6 " style={{marginTop:'100px'}} >
                <div className="card" >
                <div className="card-body" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <h5 className="card-title">{product.title}</h5>
                    <h6 >{product.description }</h6>
                    <b className="card-text">{product.price} $</b>   
                    <a href="#" className="btn btn-primary mt-4" onClick={() => dispatch(Add_Product(product))}>Add to cart</a>
                </div>
                </div>
            </div>
        </div>
    )
}