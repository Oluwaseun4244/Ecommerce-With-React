import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Description from "../Components/Description";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import RelatedProduct from "../Components/RelatedProduct";
import SingleProduct from "../Components/SingleProduct";
import { useCart } from "react-use-cart";
import notify from ".././Context/notify";

function OneProduct() {
  const { prod_id } = useParams();
  const [product, setProduct] = useState({});
  const { items, addItem } = useCart();


  const getProduct = (prod_id) => {
    fetch(`https://tola-ecommerce.herokuapp.com/api/single_product/${prod_id}`)
      .then((response) => response.json())
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkAndNotify = (product) => {
    //the (item) is a parameter waiting to be provided by function caller
    const checkItem = (item) => {
      return item.id === product.id;
    };

    const inCart = items.findIndex(checkItem);
    //findIndex maps over the items in cart, call checkItem() and provides each item as argument for checkItem
    //if result condition isn't met, result is -1 and hence below
    if (inCart > -1) {
      notify("Product already in cart", "warn");
    } else {
      addItem(product);
      notify("Product has been added to cart", "success");
    }
  };

  useEffect(() => {
    getProduct(prod_id);
  }, []);

  return (
    <div>
      <Nav />
      <Header desc="Product Details" />
      <MobileNav desc="Product Details" />
      <SingleProduct
        product={product}
        func={() => checkAndNotify(product)}
      />
      <Description />
      <RelatedProduct />
      <Footer />
    </div>
  );
}

export default OneProduct;
