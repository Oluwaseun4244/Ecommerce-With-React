import React from "react";

export default function ({ img, title, extra, content }) {
  return (
    <div className="col-lg-3">
      <div className="card1 offer-card">
        <div className="offer-icon">
          <img className="card-offer-img" src={img} alt="" />
        </div>
        <h2 className={`offer-title offer-txt ${extra}`}>{title}</h2>
        <p className="offer-text1">
          {content}
        </p>
      </div>
    </div>
  );
}
