import React from 'react'

function CheckoutProduct({price, name, image }) {
    return (
        <div >
        <div className="row demo-img">
          <div className="col-lg-4 ">
            <img style={{width: "83px", height: "87px"}} src={`http://localhost:8000/${image}`} alt="" />
          </div>
          <div className="col-lg-8">
            <h6>{name}</h6>
            <p>Color: Brown <span style={{float: "right"}}>N{price}</span></p>
            <p>Size: XL</p>
          </div>
        </div>
            <hr/>
      </div>
    )
}

export default CheckoutProduct
