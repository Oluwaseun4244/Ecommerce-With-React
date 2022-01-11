import React from "react";

function SimilarBlog({img}) {
  return (
    <div className="col-lg-9 similar-blog-div">
      <div className="row">
        <div className="col-lg-2">
          <img src={`.././images/${img}`} alt="" />
        </div>
        <div className="col-lg-7 similar-blog-details">
          <h6>
            Banjo Tola<span> Dec 31 2021</span>
          </h6>
          <p className="paragraph2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
            rutrum vulputate consectetur.
          </p>
        </div>
      </div>
      <div className="similar-posts"></div>
    </div>
  );
}

export default SimilarBlog;
