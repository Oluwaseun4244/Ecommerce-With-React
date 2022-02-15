import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router";

function MobileNav({ desc }) {
  const { isEmpty, totalUniqueItems, emptyCart } = useCart();
  const [mobileView, setMobileView] = useState(false);

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    emptyCart();
    navigate("/login");
  };

  const saveRoute = () =>{
    localStorage.setItem("route", "/cart")
    navigate("/login")
  }
  const changeMobileView = () => {
    setMobileView(!mobileView);
  };

  return (
    <div className="mobile-nav">
      <nav className="navbar head1  navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler mobile-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={changeMobileView}
          >
            <span className="navbar-toggler-icon mobile-icon" />
          </button>

          {mobileView && (
            <div className="">
              <ul className="navbar-nav">
                <li className="mobile-nav-item">
                  <Link className="nav-link anc" to="#">
                    <i className="fa fa-envelope" /> banjotola12@gmail.com
                  </Link>
                </li>
                <li className="mobile-nav-item">
                  <Link className="nav-link anc" to="#">
                    <i className="fa fa-phone-alt" /> +2348030947177
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="mobile-nav-item">
                  <Link
                    className="nav-link   anc"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <Link className="" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="" />
                    </li>
                    <li>
                      <Link className="" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="mobile-nav-item ">
                  <Link
                    className="nav-link anc "
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    USD
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <Link className="" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="" />
                    </li>
                    <li>
                      <Link className="" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="mobile-nav-item">
                  <Link className="nav-link anc" to="/login">
                    Login <i className="fa fa-user" />
                  </Link>
                </li>
                
                <li className="mobile-nav-item">
                  <Link className="nav-link anc" to="#">
                    wishlist <i className="fa fa-heart" />
                  </Link>
                </li>
                {/* <li className="mobile-nav-item">
                  <Link className="nav-link anc" to="/cart">
                    {isEmpty ? (
                      <div>
                        <i className="fa fa-shopping-cart" />
                      </div>
                    ) : (
                      <div>
                        <i className="fa fa-shopping-cart" />
                        {totalUniqueItems}
                      </div>
                    )}
                  </Link>
                </li> */}

<li className="mobile-nav-item">
                {isEmpty && user ? (
                  <Link className="nav-link anc" to="/cart">
                    <div>
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </Link>
                ) : isEmpty && !user ? (
                  <Link className="nav-link anc" to="/login">
                    <div>
                      <i className="fa fa-shopping-cart cart-num" />
                    </div>
                  </Link>
                ) : !isEmpty && !user ? (
                  // <Link  to="/login">
                  <div style={{cursor: "pointer"}} onClick={saveRoute} className="nav-link anc">
                    <i className="fa fa-shopping-cart cart-num" />
                    {totalUniqueItems}
                  </div>
                  // </Link>
                ) :  (   <Link className="nav-link anc" to="/cart">
                <div>
                  <i className="fa fa-shopping-cart " />
                 <span className="cart-num" >{ totalUniqueItems}</span> 
                </div>
                </Link>)}
              </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <nav className="navbar head2 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand navbar-brand-b" to="/home">
            Hekto
          </Link>

          <div
            className="collapse1 navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link anc2 active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/pages">
                  pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="#">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn2 btn-outline-success" type="submit">
                <i className="fa btn-search fa-search" />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="header">
        <div className="container">
          <h1 id="title">{desc}</h1>
          <nav className=" head3 navbar-expand-lg ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link anc2" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/products">
                  pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2 active" to="#">
                  {desc}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
