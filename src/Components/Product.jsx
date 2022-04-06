import React from "react";
import { Link } from "react-router-dom";
import addCommas  from '.././Context/addComma';



function Product({
  func,
  product
}) 





{
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="single-item row">
        <div className="col-4 product-img-div">
            <Link to={`/product/${product.id}`}>
              <img
                src={`https://tola-ecommerce.herokuapp.com/${product.product_image1}`}
                alt=""
                className="card-img-top"
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-lg-4">
                <p className="card-title">{product.product_name}</p>
              </div>
              <div className="col-lg-8">
                <div>
                  <span className="sm-circle bg-warning " />
                  <span className="sm-circle bg-danger" />
                  <span className="sm-circle bg-primary" />
                </div>
              </div>
            </div>
            <div className="prices">
              <span className="card-price">N{addCommas(product.price)}.00</span>
              <span className="card-price-former">N{addCommas(product.product_old_price)}</span>
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </div>
            <div className="item-description">
              <p>{product.product_description}</p>
            </div>
            <div>
              <i
                style={{ cursor: "pointer" }}
                className="fa fa-cart-plus item-actions"
                onClick={func}
              />
              <i style={{color: "red"}} className="fa fa-heart item-actions" />
              <i className="fa fa-search-plus item-actions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
