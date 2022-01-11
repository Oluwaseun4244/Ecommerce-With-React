import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

function OrderCompleted() {
  return (
    <div>
      <Nav />
      <Header desc="Order Completed" />
      <MobileNav desc="Order Completed" />
      <div className="container mb-4">
        <img
          className="order-completed-clock"
          src="../images/clock.png"
          alt=""
        />
        <div className="order-completed-div">
          <div>
            <img
              style={{ marginInline: "45%", width: "10%" }}
              src="../images/checked.png"
              alt=""
            />
            <h3 className="order-completed-htxt">Your Order Is Completed!</h3>
            <p className="order-completed-txt">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <Link to="/products">
              <Button
                btnClass="order-completed-btn"
                btnText="Continue Shopping"
              />
            </Link>
          </div>
        </div>
        {/* <img
              className="order-completed-note"
              src="../images/note.png"
              alt=""
            /> */}
      </div>
      <Footer />
    </div>
  );
}

export default OrderCompleted;
