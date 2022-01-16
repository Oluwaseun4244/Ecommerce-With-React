// import React, { useState } from "react";
import ".././Day1.css";
import GridProduct from "../Components/GridProduct";
import Product from "../Components/Product";
import notify  from '.././Context/userContext';
import { useCart } from "react-use-cart";



// toast.configure();
// const notify = (message) => {
//   toast.success(message, {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 1500,
//     toastId: "01",
//     transition: Zoom,
//   });
// };

// const notify2 = () => {
//   toast.warn("Product already in cart", {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 1500,
//     toastId: "01",
//     transition: Zoom,
//   });
// };

function Products({ products, pageType }) {
  const { items, addItem, isEmpty } = useCart();


  const checkAndNotify = (product, id) => {
    //the (item) is a parameter waiting to be provided by function caller
    //id was provided by the onClick
    const checkItem = (item) => {
      return item.id === id;
    };

    const inCart = items.findIndex(checkItem);
    //findIndex maps over items, call checkItem() and provides each item as argument for checkItem
    //if result condition isn't met, result is -1 and hence below
    if (inCart > -1) {
      notify("Product already in cart", "warn");
    } else {
      addItem(product);
      notify("Product has been added to cart", "success");
    }
  };



  return (
    <>
      {pageType ? (
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
      ) : (
        <div className="col-lg-9">
          <div className="row">
            {products.map((product, i) => {
              return (
                <GridProduct
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
        </div>
      )}
    </>
  );
}

export default Products;
