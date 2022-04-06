import React, { useEffect, useState } from "react";
import addCommas  from '.././Context/addComma';

function SingleProduct({
  product,
  func,
}) {
  const [singleImage, setSingleImage] = useState("");

  const changeImage = (theImage) => {
    setSingleImage(theImage);
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div
        className="row"
        style={{
          boxShadow: "0px 0px 25px 10px #F6F4FD",
          borderRadius: "2px",
          backgroundColor: "#fff",
          marginBlock: "100px",
        }}
      >
        <div className="col-lg-2 single-product-col2">
          <img
            onClick={() => changeImage(product.product_image1)}
            src={`https://tola-ecommerce.herokuapp.com/${product.product_image1}`}
            alt="product image"
          />
          <img
            onClick={() => changeImage(product.product_image2)}
            className="single-img-middle"
            src={`https://tola-ecommerce.herokuapp.com/${product.product_image2}`}
            alt="product image"
          />

          <img
            onClick={() => changeImage(product.product_image3)}
            src={`https://tola-ecommerce.herokuapp.com/${product.product_image3}`}
            alt="product image"
          />
        </div>
        <div className="col-lg-4 single-product-col2">
          {!singleImage ? (
            <img
              //  src={`http://localhost:8000/${pic}`}
              src={`https://tola-ecommerce.herokuapp.com/${product.product_image1}`}
              style={{ padding: "8px 4px", width: "375px", height: "487px" }}
              alt="product image"
            />
          ) : (
            <img
              //  src={`http://localhost:8000/${pic}`}
              src={`https://tola-ecommerce.herokuapp.com/${singleImage}`}
              style={{ padding: "8px 4px", width: "375px", height: "487px" }}
              alt="bag4"
            />
          )}
        </div>
        <div className="col-lg-6">
          <div className="" style={{ padding: "8px 25px", marginBlock: "15%" }}>
            <div className="">
              <div className="col-lg-12">
                <p
                  className="card-title"
                  style={{ fontFamily: "Josefin Sans", fontSize: "24px" }}
                >
                  {product.product_name}
                </p>
              </div>
            </div>
            <div className="prices">
              <span>
                <i className="fa fa-star" style={{ color: "yellow" }} />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
              </span>
              <span style={{ color: "blue" }}>(22)</span>
            </div>
            <div>
              <span className="card-price">${(product.price)}.00</span>
              <span className="card-price-former">${(product.product_old_price)}.00</span>
            </div>
            <div className="item-description">
              <p
                style={{
                  color: "blue",
                  marginBottom: 0,
                  fontFamily: "Josefin Sans",
                }}
              >
                Color
              </p>
              <p>{product.product_description}</p>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "5px",
                  fontFamily: "Josefin Sans",
                  color: "blue",
                }}
                onClick={func}
              >
                Add To Cart
              </button>
              <span>
                <i className="fa fa-heart" style={{ padding: "0 8px" }} />
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Categories: {product.category}
              </p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>Tags:</p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Share:
                <span>
                  <i
                    className="fa fa-facebook"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fa fa-instagram"
                    style={{ color: "#FB2E86", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fa fa-twitter-square"
                    style={{ color: "#37DAF3", paddingLeft: "8px" }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
