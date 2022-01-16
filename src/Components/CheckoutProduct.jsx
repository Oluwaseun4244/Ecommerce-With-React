import React from 'react'
import addCommas  from '.././Context/addComma';

function CheckoutProduct({price, name, image, qty }) {
    return (
        <div >
        <div className="row demo-img">
          <div className="col-lg-4 ">
            <img style={{width: "83px", height: "87px"}} src={`http://localhost:8000/${image}`} alt="" />
          </div>
          <div className="col-lg-8">
            <h6>{name} <span style={{float: "right"}}>N{addCommas(price)}</span></h6>
            {/* <p>Color: Brown </p> */}
            <p>Size: XL</p>
            <p>Qty: {qty}</p>
          </div>
        </div>
            <hr/>
      </div>
    )
}

export default CheckoutProduct
