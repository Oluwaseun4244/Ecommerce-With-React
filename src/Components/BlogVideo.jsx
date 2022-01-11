import React from 'react'

function BlogVideo({blogVideo}) {
    return (
        <div className="col-lg-6 blog-video">
        <img src={`.././images/${blogVideo}`} alt="" />
      </div>
    )
}

export default BlogVideo
