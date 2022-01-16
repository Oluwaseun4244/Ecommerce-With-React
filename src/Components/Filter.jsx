import React from 'react'

function Filter({grid, list, func}) {
    return (
        <div className="row">
        <div className="col-lg-6">
          <div className="search-right">
            <p className="title">Ecommerce Acceories &amp; Fashion item </p>
            <p className="stat">About 9,620 results (0.62 seconds)</p>
          </div>
        </div>
        <div className="col-lg-6 d-inline-flex">
          <div className="search-div1">
            <span className="search-text">Per Page:</span>
            <input className="search-input" onChange={func} size={1} type="number" />
          </div>
          <div className="search-div2">
            <span className="search-text">Sort By:</span>
            <select
              className="search-input"
              aria-label=".form-select-sm select example"
            >
              {/* <option defaultValue>Best Match</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option> */}
            </select>
          </div>
          <div className="search-div3">
            <span className="search-text">View:</span>
            <i onClick={list} className="fa fa-list list" />
            <i onClick={grid} className="fa fa-th-large grid" />
            {/* <input className="search-input" size={15} type="text" /> */}
          </div>
        </div>
      </div>
    )
}

export default Filter
