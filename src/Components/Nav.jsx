import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";

function Nav() {
  const { isEmpty, totalUniqueItems, emptyCart } = useCart();
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  // const [drop, setDrop] = useState(false);

  const logout = () => {
    localStorage.clear();
    emptyCart();
    navigate("/login");
  };

  const saveRoute = () =>{
    localStorage.setItem("route", "/cart")
    navigate("/login")
  }

  return (
    <div>
      <nav className="navbar close head1 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link anc" to="#">
                  <i className="fa fa-envelope" /> banjotola12@gmail.com
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc" to="#">
                  <i className="fa fa-phone-alt" /> +2348030947177
                </Link>
              </li>
            </ul>
            <ul
              style={{ paddingLeft: "7%" }}
              className="navbar-nav ul1 me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item dropdown">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link anc "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NGN
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {user ? (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                    className="nav-link anc"
                  >
                    Logout <i className="fa fa-user" />
                  </div>
                ) : (
                  <Link className="nav-link anc" to="/login">
                    Login <i className="fa fa-user" />
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link anc" to="#">
                  wishlist <i className="fa fa-heart" />
                </Link>
              </li>
              <li className="nav-item">
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
        </div>
      </nav>
      <nav className="navbar head2 close navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand navbar-brand-b" to="/home">
            Tosu
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <Link className="nav-link anc2" to="/products">
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
    </div>
  );
}

export default Nav;
