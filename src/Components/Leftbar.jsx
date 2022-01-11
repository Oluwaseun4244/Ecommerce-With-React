import React, { useEffect, useState } from "react";
import Button from "./Button";

function Leftbar({ inputFunc }) {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const getBrands = () => {
    fetch("http://localhost:8000/api/brands")
      .then((response) => response.json())
      .then((brands) => {
        setBrands(brands);
      })
      .catch();
  };

  const getCategories = () => {
    fetch("http://localhost:8000/api/categories")
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch();
  };

  useEffect(() => {
    getBrands();
    getCategories();
  }, []);
  return (
    <div className="col-lg-3">
      <div className="right-filter">
        <p>Product Brand</p>
        <ul className="right-filter-ul">
          {brands.map((brand, i) => {
            return (
              <li className>
                <input
                  value={brand.brand}
                  onChange={inputFunc}
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label">{brand.brand}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right-filter">
        <p>Categories</p>
        <ul className="right-filter-ul">
          {categories.map((category, i) => {
            return (
              <li >
                <input
                  value={category.category}
                  onChange={inputFunc}
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label">{category.category}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right-filter">
        <p>Price Filter</p>
        <ul className="right-filter-ul">
          <li className>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label">$0.00 - $150.00</label>
          </li>
          <li className>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label">$150.00 - $350.00</label>
          </li>
          <li className>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label">$150.00 - $504.00</label>
          </li>
          <li className>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label">$450.00 +</label>
          </li>
        </ul>
      </div>
      <span className="bottom-search">
        <input
          type="text"
          size
          className="search-text1"
          style={{ width: "50%" }}
        />
        <Button
          btnClass="search-btn"
          iconClass="fa fa-search input-search-icon"
          textColor="#bcbddb"
        />
      </span>
    </div>
  );
}

export default Leftbar;
