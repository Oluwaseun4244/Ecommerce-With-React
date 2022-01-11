import React from 'react'

function RelatedProduct() {
    return (
       <div className="container" style={{marginTop: "80px", marginBottom: "120px"}}>
        <h4 className="related-product">Related Product</h4>
        <div className="row">
          <div className="col-lg-3 related-img">
            <img
              style={{ height: "316px" }}
              src=".././images/related-product1.png"
              alt=""
            />
            <h6 className="mt-2">
              Mens Fashion Wear{" "}
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </h6>
            <h6>$43.00</h6>
          </div>
          <div className="col-lg-3 related-img">
            <img
              style={{ height: "316px" }}
              src=".././images/related-product2.png"
              alt=""
            />
            <h6 className="mt-2">
              Women’s Fashion{" "}
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </h6>
            <h6>$43.00</h6>
          </div>
          <div className="col-lg-3 related-img">
            <img
              style={{ height: "316px" }}
              src=".././images/related-product3.png"
              alt=""
            />
            <h6 className="mt-2">
              Wolx Dummy Fashion{" "}
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </h6>
            <h6>$43.00</h6>
          </div>
          <div className="col-lg-3 related-img">
            <img
              style={{ height: "316px" }}
              src=".././images/related-product4.png"
              alt=""
            />
            <h6 className="mt-2">
              Top Wall Digital Clock{" "}
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </h6>
            <h6>$43.00</h6>
          </div>
        </div>
      </div>
    )
}

export default RelatedProduct
