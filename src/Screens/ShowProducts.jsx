import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Leftbar from "../Components/Leftbar";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import Products from "./Products";
import ReactPaginate from "react-paginate";

function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageType, setPageType] = useState(true);
  const [productPerPage, setPerPage] = useState(3)


//GET ALL PRODUCTS FROM BACKEND

  const getProducts = () => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        // console.log("show me products", products);
        setProducts(products);
        const endOffset = itemOffset + productPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / productPerPage));
      })
      .catch((error) => {
        console.log("please show me the error", error);
      });
  };

  // GETTING PRODUCTS FROM BACKEND ENDS HERE



  // NUMBER OF PRODUCTS PER PAGE

  const perPage = (productNum) => {
    if (productNum > 0) {

    setPerPage(productNum)
    } else {
        setPerPage(3);
    }
  };

    // NUMBER OF PRODUCTS PER PAGE


  //BRAND AND CAGEGORY FILTERING

  const brandAndCategoryFilter = (ev) => {
    if (ev.target.checked) {
      // console.log(ev.target.name)
      const filtered = products.filter((product, i) => {
        const value = ev.target.value;
        return (
          (product.category === value) | (product.brand === value)
          //  setProducts(product.category === ev.target.value)
        );
      });
      setCurrentItems(filtered);

 
    } else {
      getProducts();
    }
  };

  //BRAND AND CAGEGORY FILTERING ENDS

  //PRICE FILTERING

  const priceFilter = (ev) => {
    if (ev.target.checked) {
      const priceFiltered = products.filter((product, i) => {
        const lowprice = ev.target.id;
        const highprice = ev.target.value;
        return (
          Number(product.price) >= lowprice &&
          Number(product.price) <= highprice
        );
      });
      setCurrentItems(priceFiltered);
    } else {
      getProducts();
    }
  };

  //PRICE FILTERING ENDS


  //PAGINATION!!!

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //PAGINATION ENDS 

  useEffect(() => {
    getProducts();

  }, [itemOffset, productPerPage]);

  return (
    <div>
      <Nav />
      <Header desc="shop left sidebar" />
      <MobileNav desc="shop left sidebar" />
      <div className="container">
        <div className="section-4">
          <Filter
            grid={() => setPageType(false)}
            list={() => setPageType(true)}
            func={(e) => perPage(e.target.value)}
          />
        </div>
        <div className="main">
          <div className="row">
            <Leftbar
              inputFunc={brandAndCategoryFilter}
              priceFunc={priceFilter}
            />
            <Products products={currentItems} pageType={pageType} />


            <div className="col-lg-12 mb-5">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                containerClassName={"pagination justify-content-center mt-3"}
                pageClassName={"page-item"}
                previousClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName="page-link"
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                previousLabel="<<"
                renderOnZeroPageCount={null}
                activeClassName="active "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShowProducts;
