import React from "react";

function BlogCardContent({ blogImg, name, blogDate, description, title }) {
  return (
    <div>
      <img className="blog-img" src={`http://localhost:8000/${blogImg}`} alt="" />
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
            <div className="col-lg-10 under-blog2">{blogDate}</div>
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
      {description}
        </p>
      </div>
      <div>
        <p className="blog-content">
       {description}
        </p>
      </div>
      <div>
        <p className="blog-content">
          {" "}
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
          toamk risusu”
        </p>
      </div>

      <div className="mt-5 blog-video-div">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
          toamk risusu”
        </p>
      </div>
    </div>
  );
}

export default BlogCardContent;
