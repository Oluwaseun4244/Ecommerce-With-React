import React from "react";

function ProductOnBlog({ productName, pic }) {
  return (
    <div className="col-lg-3 product-onblog-div">
      <div className="product-onblog-product">
        <img src={`.././images/${pic}`} alt="" className="card-img-top" />
      </div>
      <div>
        <h6 className="grid-product-onblog">{productName}</h6>
        <div>
        
        </div>
        <div>
          <p>
            $26.00{" "}
            <span
              className="striked-out-price"
              style={{ textDecoration: "line-through", marginLeft: "5px" }}
            >
              $45.00
            </span>
            <span style={{ marginLeft: "10px" }}>
              <i className="fa fa-star" style={{ color: "yellow" }} />
              <i className="fa fa-star" style={{ color: "yellow" }} />
              <i className="fa fa-star" style={{ color: "yellow" }} />
              <i className="fa fa-star" style={{ color: "yellow" }} />
              <i className="fa fa-star" style={{ color: "#B2B2B2" }} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductOnBlog;
