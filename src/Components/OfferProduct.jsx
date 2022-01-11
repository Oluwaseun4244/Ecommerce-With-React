import React from 'react'

function OfferProduct({img}) {
    return (
        <div className="col-lg-6 mt-4">
        <img className="offer-img" src={`.././images/${img}`} alt="" />
        <h6 className="offer-title-text mt-2">Netus proin</h6>
        <h6 className="offer-amount">$12.00 - $15.00</h6>
      </div>
    )
}

export default OfferProduct
