import React from 'react'

export default function CardTrending({image, price, oldPrice, name}) {
    return (
        <div className="col-lg-3">
        <div className="card trending-card">
       
           <div className="card-body">
           <div className="image-latest">

           <img src={`http://localhost:8000/${image}`} alt="" className="card-img-top " />
         
        </div>
        <div className="card-latest">
           <div className="row">

               <div className="col-lg-12">
               <p id='text-trend'>{name}</p>
               </div>
               <div className="col-lg-12 trend-price">
               <span id='after-trend'>${price}</span>
               <span id='before-trend'>${oldPrice}</span>
               </div>

               <div className="col-lg-6">
              
               </div>
               <div className="col-lg-6">
             
               </div>
           
           </div>
        </div>
           </div>
        </div>
       
    </div>
    )
}
