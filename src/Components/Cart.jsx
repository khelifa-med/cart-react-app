
import { Table } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

import { useDispatch, useSelector } from "react-redux"
import { Clear, DeleteFromCart } from "../rtk/Slices/Cart_Slice";


function Cart()
{
    
    const cart = useSelector(state => state.cart)
    console.log(cart);
    
    const TotalPrice = cart.reduce((acc,product)=>{
        acc += product.price * product.quontity
        return acc
    },0)

    let dispatch = useDispatch()
    
    return(
        <div className="continaire">

            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',marginBottom:'15px'}}>
            <Button  onClick={()=> dispatch(Clear())} variant="primary"  size="sm">Delete All Products</Button>

            <b>Total price {TotalPrice.toFixed(2)} $</b>
            </div>
            

            <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                       
                        <th>Price</th>
                        <th>Img</th>
                        <th>Quontity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                        {cart.map((product)=>{
                            return  <tr key={product.id} >
                                        <td>{product.id}</td>
                                        <td style={{width:'20%'}}>{product.title}</td>
                                        <td>{product.price} $</td>
                                        <td>
                                            <img src={(product.image)} className="card-img-top" style={{width:'100px',height:'100px'}} alt="..."/>
                                        </td>
                                        <td>{product.quontity}</td>
                                        
                                        <td>    
                                    
                                        <Button  onClick={()=> dispatch(DeleteFromCart(product))} variant="danger" size="sm">delete</Button>
                                        
                                        </td>
                                    </tr>
                        })}
                    
                    </tbody>
                </Table>
        </div>
    )
}


export default Cart