import img1 from '../CatsImages/product1.jpg'
import img2 from '../CatsImages/product2.webp'
import img3 from '../CatsImages/product3.jpg'

function Home()
{
    return(
            

            <div className='continaire'>
                <div
                 id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"
                  
                 >
                    <div className="carousel-inner" style={{borderRadius:'10px',height:'80vh'}}>
                        <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item " >
                         <img src={img2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}


export default Home