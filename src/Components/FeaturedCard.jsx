import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function FeaturedCard({title, image, price, prod_id, func, product}) {

    return (
        <div className="col-lg-3">
            <div className="card card-feature">
           
                 <div className="image-feature">
                    <div className ="icons-feature">
                    <i onClick={func} className="fa fa-cart-plus item-action" />
                    <i className="fa fa-heart item-action" />
                    <i className="fa fa-search-plus item-action" />
                </div>
                   <Link to={`/product/${prod_id}`}>
                    <img src={`http://localhost:8000/${image}`} alt="" className="card-img-top" /></Link>
                    <div id='btn'>
                    <Button btnClass="btn-feature" btnText="view details" />            
                    </div>
                 </div>
                 <div className="card-details">
                 <p className="card-title-feature text-center">{title}</p>
                 <div className="circled">
                 <span className="sm-circled-feature circle1 " />
                 <span className="sm-circled-feature circle2" />
                 <span className="sm-circled-feature circle3" />
               </div>

                <p className="color-code text-center">Code - Y523201</p>
                 
     
                 <div className="prices-bottom text-center">
                     <span className="card-price">${price}.00</span>
                    
                     <br/>
          
                  </div>    
                 </div>
            </div>
           
        </div>
    )
}
