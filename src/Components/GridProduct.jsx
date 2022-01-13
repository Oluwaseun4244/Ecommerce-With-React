import React from "react";
import { Link } from "react-router-dom";

function GridProduct({
  productName,
  pic,
  oldPrice,
  price,
  prod_id,
  func,
}) {
  return (
    <div className="col-lg-4 grid-main-div">
      <div className="row grid-div">
        <div className="col-lg-2 icon-div">
          <div className="grid-icons">
            <i  onClick={func} className="fa fa-cart-plus item-actions " />
            <i style={{color: "red"}} className="fa fa-heart item-actions" />
            <i className="fa fa-search-plus item-actions" />
          </div>
        </div>
        <div className="col-lg-10 grid-img-div">
          <div className="grid-product">
            <Link  to={`/product/${prod_id}`}>
              <img
                src={`http://localhost:8000/${pic}`}
                alt=""
                className=""
              />
            </Link>
          </div>
          <div className="grid-product-content">
            <h6>{productName}</h6>
            <div>
              <span className="sm-circle bg-warning " />
              <span className="sm-circle bg-danger" />
              <span className="sm-circle bg-primary" />
            </div>
            <p>
              N{price}.00{" "}
              <span style={{ textDecoration: "line-through" }}>
                N{oldPrice}.00
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridProduct;
