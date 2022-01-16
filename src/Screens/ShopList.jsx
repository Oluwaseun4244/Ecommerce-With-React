import React from "react";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import Product from "../Components/Product";

function ShopList() {
    return (
        <div>
        <Nav />
        <Header desc="Shop List"/>
        <MobileNav desc="Shop List"/>
        
        
        <div className="container">
          <div className="section-4">
            <Filter/>
          </div>
          <div className="main">
            <div className="row">
              
              <div className="col-lg-11" >
                <Product pic="wrist-watch.jpg" />
                <Product pic="bluetooth.jpg" marginTop="20px" />
                <Product pic="shoes.png" marginTop="20px" />
                <Product pic="videogame.jpg" marginTop="20px" />
                <Product pic="cream.png" marginTop="20px" />
              </div>
            </div>
          </div>
          <div className="supporter">
            <img src="supporters.jpg" alt="" />
          </div>
        </div>
        <Footer/>
    
      </div>
    )
}

export default ShopList;
