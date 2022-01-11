import React from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

function Error() {
  return (
    <div>
      <Nav  />
      <Header desc="404 Not Found"/>
      <MobileNav desc="404 Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 error-div">
            <img style={{width: "90%"}} src=".././images/error.svg" alt="" />
            <Button btnClass={"back-home-btn"} btnText={"Back To Home"} />
      
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
