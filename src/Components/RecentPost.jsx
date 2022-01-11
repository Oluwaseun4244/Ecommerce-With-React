import React from "react";

function RecentPost({postImg}) {
  return (
    <>
      <div className="col-lg-4">
        <img
          style={{ width: "100%" }}
          className="mt-4"
          src={`.././images/${postImg}`}
          alt=""
        />
      </div>
      <div className="col-lg-8">
        <h6 className="post-title mt-4">It is a long established fact</h6>
        <p className="post-date">Aug 09 2020</p>
      </div>
    </>
  );
}

export default RecentPost;
