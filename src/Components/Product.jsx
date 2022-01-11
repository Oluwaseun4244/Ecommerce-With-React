import React from "react";
import { Link } from "react-router-dom";

function Product({
  pic,
  productName,
  price,
  oldPrice,
  description,
  prod_id,
  func,
}) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="single-item row">
        <div className="col-4 product-img-div">
            <Link to={`/product/${prod_id}`}>
              <img
                src={`http://localhost:8000/${pic}`}
                alt=""
                className="card-img-top"
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-lg-4">
                <p className="card-title">{productName}</p>
              </div>
              <div className="col-lg-8">
                <div className>
                  <span className="sm-circle bg-warning " />
                  <span className="sm-circle bg-danger" />
                  <span className="sm-circle bg-primary" />
                </div>
              </div>
            </div>
            <div className="prices">
              <span className="card-price">N{price}.00</span>
              <span className="card-price-former">N{oldPrice}</span>
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </div>
            <div className="item-description">
              <p>{description}</p>
            </div>
            <div>
              <i
                style={{ cursor: "pointer" }}
                className="fa fa-cart-plus item-actions"
                onClick={func}
              />
              <i className="fa fa-heart item-actions" />
              <i className="fa fa-search-plus item-actions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
