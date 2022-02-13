import React, { useEffect } from "react";
import CalculateShopping from "../Components/CalculateShopping";
import CartProduct from "../Components/CartProduct";
import CartTotals from "../Components/CartTotals";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import { useCart } from "react-use-cart";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import notify  from '.././Context/notify';
// import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from "react-toastify";



function ShoppingCart() {
  const navigate = useNavigate();
  const {
    items,
    isEmpty,
    emptyCart,
  } = useCart();

const clearAndNotify = () => {
  emptyCart();
  notify("Cart Cleared!", "error");
}

  return (
    <div>
      <Nav />
      <Header desc="Shopping Cart" />
      <MobileNav desc="Shopping Cart" />
      <div className="container shopping-div">
        <div className="shopping-cart">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mb-4">Product</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Price</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Quantity</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Total</h6>
                </div>
              </div>
              {isEmpty ? (
                < >
                <h4 style={{ color: "#c91641" }} className="empty-cart text-center">
                  Your Cart is empty!{" "}
                  <span style={{ color: "black" }}>
               
                  </span>
                </h4>
                <div className="empty-cart-div">

                <img src=".././images/empty_cart.png" alt="" />
                </div>
                </>
              ) : (
                <>
                  {items.map((item, i) => {
                    return (
                      <CartProduct
                        name={item.product_name}
                        item={item}
                        key={i}
                        img={item.product_image1}
                        price={item.price}
                        qty={item.quantity}
                      />
                    );
                  })}
                </>
              )}

              <div className="row">
                {!isEmpty && (
                  <>
                    <div className="col-lg-3">
                      <Link to="/products">
                        <Button
                          btnClass={"update-cart-btn"}
                          btnText={"Update Cart"}
                        />
                      </Link>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3">
                      <Button
                        btnFunc={() => clearAndNotify()}
                        btnClass={"clear-cart-btn"}
                        btnText={"Clear Cart"}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            {!isEmpty &&  <div className="col-lg-4">
              <h6 style={{ textAlign: "center" }} className="mb-4">
                Cart Totals
              </h6>
              
              <CartTotals />
              {/* <h6 style={{ textAlign: "center" }} className="mb-4 mt-4">
                Calculate Shopping
              </h6>
              <CalculateShopping /> */}
            </div>
             }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
