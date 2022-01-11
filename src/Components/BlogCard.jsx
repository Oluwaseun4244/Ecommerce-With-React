import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blogImg, title, date, name, description, blog_id }) {
  return (
    <div>
      <img className="blog-img" src={`http://localhost:8000/${blogImg}`}  />
      <div className="row mt-4">
        <div className="col-lg-3 ">
          <div className="row">
            <div className="col-lg-2">
              <img src=".././images/pen.png" alt="" />
            </div>
            <div className="col-lg-10 under-blog1">{name}</div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="row">
            <div className="col-lg-2">
              <img src=".././images/calendar.png" alt="" />
            </div>
            <div className="col-lg-10 under-blog2">{date.slice(0, 10)}</div>
          </div>
        </div>

        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
      </div>
      <div className="mt-4">
        <h3 className="blog-title">
         {title}
        </h3>
      </div>
      <div className="mt-4">
        <p className="blog-content">
         {description.slice(0, 300)}...
        </p>
      </div>
      <div>
        <Link to={`/blog/${blog_id}`} style={{ textDecoration: "none" }}>
          <h4 className="read-more">Read More</h4>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
