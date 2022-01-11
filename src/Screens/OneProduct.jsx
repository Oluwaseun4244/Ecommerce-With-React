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

function OneProduct() {
  const { prod_id } = useParams();
  const [product, setProduct] = useState({});
  const {addItem } = useCart();
  const getProduct = (prod_id) => {
    fetch(`http://127.0.0.1:8000/api/single_product/${prod_id}`)
      .then((response) => response.json())
      .then((prod) => {
        console.log("product", prod);
        setProduct(prod);
      })
      .catch((error) => {
        console.log(error);
      });
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
        productDescription={product.product_description}
        productName={product.product_name}
        productPrice={product.product_price}
        oldPrice={product.product_old_price}
        pic={product.product_image1}
        pic1={product.product_image2}
        pic2={product.product_image3}
        pic3={product.product_image4}
        func={()=>addItem(product)}
      />
      <Description />
      <RelatedProduct />
      <Footer />
    </div>
  );
}

export default OneProduct;
