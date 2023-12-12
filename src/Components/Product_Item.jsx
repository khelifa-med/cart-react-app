

import { Link } from 'react-router-dom'


function Product_Item({product})
{
    return(
        
            <div className="col-3" key={product.title}>
                <div className="card mb-3" >
                    <img src={product.image} className="card-img-top" alt="..."/>
                    <div className="card-body" style={{display:'flex',flexDirection:'column', justifyContent:'space-around'}}>
                        <h5 className="card-title">{product.title}</h5>
                        <h6 >{product.description.slice(0,20)}...</h6>
                        
                        <b>{product.price} $</b>
                        <Link to={`${product.id}`} href="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        
    )
}


export default Product_Item