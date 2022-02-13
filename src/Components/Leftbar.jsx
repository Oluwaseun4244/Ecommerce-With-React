import React, { useEffect, useState } from "react";
import Button from "./Button";

function Leftbar({ inputFunc, priceFunc }) {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const getBrands = () => {
    fetch("https://tola-ecommerce.herokuapp.com/api/brands")
      .then((response) => response.json())
      .then((brands) => {
        setBrands(brands);
      })
      .catch();
  };

  const getCategories = () => {
    fetch("https://tola-ecommerce.herokuapp.com/api/categories")
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
              <li key={i}>
                <input
                  
                  value={brand.brand}
                  onChange={inputFunc}
                  className="form-check-input"
                  type="checkbox"
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
          {categories.map((category, index) => {
            return (
              <li key={index}>
              <input
                  
                  value={category.category}
                  onChange={inputFunc}
                  className="form-check-input"
                  type="checkbox"
                  // name={category.id}
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
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id={0}
              name="price"
              value={3000}
              onChange={priceFunc}
            />
            <label className="form-check-label">N0 - N3,000</label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id={3000}
              name="price"
              value={6000}
              onChange={priceFunc}
            />
            <label className="form-check-label">N3,000 - N6,000</label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id={6000}
              name="price"
              value={10000}
              onChange={priceFunc}
            />
            <label className="form-check-label">N6,000 - N10,000</label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id={10000}
              name="price"
              value={1000000000}
              onChange={priceFunc}
            />
            <label className="form-check-label">N10,000 +</label>
          </li>
        </ul>
      </div>
      <span className="bottom-search">
        <input type="text" className="search-text1" style={{ width: "50%" }} />
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
