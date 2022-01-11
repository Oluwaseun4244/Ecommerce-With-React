import React from 'react'
import Button from './Button'

function CalculateShopping() {
    return (
        <div className="total-checkout">
    
        <input placeholder="Bangladesh" className="mt-4 checkout-input3" type="text"  />
        <input placeholder="Mirpur Dhaka - 1200" className="mt-4 checkout-input3" type="text"  />
        <input placeholder="Postal Code" className="mt-4 checkout-input3" type="text"  />
        <Button btnClass="calculate-btn mt-4" btnText="Calculate Shipping"/>
        {/* <button className=""></button> */}
      </div>
    )
}

export default CalculateShopping
