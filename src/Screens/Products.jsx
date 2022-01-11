import React, { useEffect, useState } from "react";
import ".././Day1.css";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import GridProduct from "../Components/GridProduct";
import Header from "../Components/Header";
import Leftbar from "../Components/Leftbar";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import Product from "../Components/Product";
import { useCart } from "react-use-cart";
import { ToastContainer, Zoom, toast } from "react-toastify";

toast.configure();
const notify = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1500,
    toastId: "01",
    transition: Zoom,
  });
};

const notify2 = () => {
  toast.warn("Product already in cart", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    toastId: "01",
    transition: Zoom,
  });
};

function Products() {
  const { items, addItem, isEmpty } = useCart();
  const [pageT, setPageType] = useState("list");
  const [products, setProducts] = useState([]);

  const togrid = () => {
    localStorage.setItem("pageType", "grid");
    setPageType("grid");
  };

  const tolist = () => {
    localStorage.setItem("pageType", "list");
    setPageType("list");
  };

  let pageType = localStorage.getItem("pageType");

  const getProducts = () => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        // console.log("show me products", products);
        setProducts(products);
      });
  };

  const perPage = (productNum) => {
    if (productNum > 0) {
      fetch(`http://localhost:8000/api/products_per_page/${productNum}`)
        .then((response) => response.json())
        .then((product2) => {
          //  console.log("e work o", product2.data);
          setProducts(product2.data);
        });
    } else {
      getProducts();
    }
  };

  const leftbarFilter = (ev) => {
    if (ev.target.checked) {
      // console.log("filtered", ev.target.value);
      fetch(`http://localhost:8000/api/filter/${ev.target.value}`)
        .then((response) => response.json())
        .then((filtered) => {
          setProducts(filtered);
        })
        .catch();
    } else {
      getProducts();
    }
  };

  const checkAndNotify = (product, id) => {

    //the (item) is a parameter waiting to be provided by function caller
    //id was provided by the onClick
      const checkItem = (item)=>{
        return item.id === id
      }
    //inCart maps over items, call checkItem() and provides each item as argument for checkItem
      const inCart = items.findIndex(checkItem)
    //if result condition isn't met, result is -1 and hence below
      if (inCart > -1){
        notify2()
      }else{
          addItem(product);
          notify("Product has been added to cart");
      }

  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Nav />
      <Header desc="shop left sidebar" />
      <MobileNav desc="shop left sidebar" />

      <div className="container">
        <div className="section-4">
          <Filter
            grid={togrid}
            list={tolist}
            func={(e) => perPage(e.target.value)}
          />
        </div>
        <div className="main">
          <div className="row">
            <Leftbar inputFunc={leftbarFilter} />
            {pageType === "list" ? (
              <div className="col-lg-9 list-card">
                {products.map((product, i) => {
                  return (
                    <Product
                      key={i}
                      pic={product.product_image1}
                      productName={product.product_name}
                      price={product.price}
                      oldPrice={product.product_old_price}
                      description={product.product_description}
                      prod_id={product.id}
                      func={() => checkAndNotify(product, product.id)}
                    />
                  );
                })}
              </div>
            ) : pageType === "grid" ? (
              <div className="col-lg-9">
                <div className="row">
                  {products.map((product, i) => {
                    return (
                      <GridProduct
                        key={i}
                        pic={product.product_image1}
                        productName={product.product_name}
                        productPrice={product.product_price}
                        oldPrice={product.product_old_price}
                        description={product.product_description}
                        prod_id={product.id}
                        func={() => checkAndNotify(product, product.id)}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="supporter">
          <img src="supporters.jpg" alt="" />
        </div>
      </div>
      <Footer />

      {/* JavaScript Bundle with Popper */}
    </div>
  );
}

export default Products;
