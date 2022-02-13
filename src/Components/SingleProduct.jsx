import React, { useEffect, useState } from "react";


function SingleProduct({
  productDescription,
  productName,
  productPrice,
  oldPrice,
  pic,
  pic1,
  pic2,
  pic3,
  func
}) {
  const [singleImage, setSingleImage] = useState();
 
  const changeImage = (theImage) => {
    setSingleImage(theImage);
  };



  useEffect(() => {

   
  }, []);

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
            onClick={() => changeImage(pic1)}
            src={`http://localhost:8000/${pic1}`}
            alt="bag1"
          />
          <img
            onClick={() => changeImage(pic2)}
            className="single-img-middle"
            src={`http://localhost:8000/${pic2}`}
            alt="bag2"
          />
          
          <img
            onClick={() => changeImage(pic3)}
            src={`http://localhost:8000/${pic3}`}
            alt="bag3"
          />
        </div>
        <div className="col-lg-4 single-product-col2">
          {!singleImage ? (  <img
            //  src={`http://localhost:8000/${pic}`}
            src={`http://localhost:8000/${pic}`}
            style={{ padding: "8px 4px", width: "375px", height: "487px" }}
            alt="bag4"
          />) : (  <img
            //  src={`http://localhost:8000/${pic}`}
            src={`http://localhost:8000/${singleImage}`}
            style={{ padding: "8px 4px", width: "375px", height: "487px" }}
            alt="bag4"
          />)}
     
        </div>
        <div className="col-lg-6">
          <div className="" style={{ padding: "8px 25px", marginBlock: "15%" }}>
            <div className="">
              <div className="col-lg-12">
                <p
                  className="card-title"
                  style={{ fontFamily: "Josefin Sans", fontSize: "24px" }}
                >
                  {productName}
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
              <span className="card-price">${productPrice}.00</span>
              <span className="card-price-former">${oldPrice}.00</span>
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
              <p>{productDescription}</p>
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
                Categories:
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
