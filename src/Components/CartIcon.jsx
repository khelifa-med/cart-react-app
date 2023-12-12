
import { Link } from 'react-router-dom'
import '../fontawesome-free-6.4.2-web/css/all.min.css'
import { useSelector } from 'react-redux'


 function CartIcon(){
    let productCounter = useSelector(state => state.cart)
  
    return (
            <div className="m-2" style={{display:'flex',cursor:'pointer'}}>
                <Link to={'/cat'}>
                    <i className="fa-solid fa-cart-shopping" style={{fontSize:'25px',color:'black'}}></i>
                    <span className="badge bg-danger" style={{position:'absolute',top:'5px',right:'5px'}}>
                    {productCounter.length}
                    </span>
                </Link>                
            </div>
    )
}



export default CartIcon