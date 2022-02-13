import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import OfferProduct from "../Components/OfferProduct";
import RecentPost from "../Components/RecentPost";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = () => {
    fetch("https://tola-ecommerce.herokuapp.com/api/blogs")
      .then((response) => response.json())
      .then((blogs) => {
        // console.log("the blogs are here", blogs);
        setBlogs(blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <Nav />
      <Header desc="Blog Page" />
      <MobileNav desc="Blog Page" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-9">
            {blogs.map((blog, i) => {
              return (
                <BlogCard
                  blogImg={blog.blog_image}
                  key={i}
                  name={blog.author_name}
                  description={blog.blog_details}
                  title={blog.title}
                  date={blog.created_at}
                  blog_id={blog.id}
                />
              );
            })}
          </div>
          <div className="col-lg-3">
            <div className="search-div">
              <h6 id="search1">Search</h6>
              <span className="bottom-search">
                <input
                  type="text"
                  size
                  className="search-text2 mt-4"
                  style={{ width: "80%" }}
                  placeholder="Seach For Posts"
                />
                <Button
                  btnClass="search-btn"
                  textColor="#CBCBE0"
                  btnText=""
                  iconClass="fa fa-search input-search-icon'  />"
                />
              </span>
            </div>

            <div className="category-div mt-4">
              <h6 id="category-txt">Categories</h6>
              <div className="cat-flex">
                <ul>
                  <li className="ul-li">Hobbies (21)</li>
                  <li className="ul-li">Women (21)</li>
                  <li className="ul-li">Women (21)</li>
                  <li className="ul-li">Women (21)</li>
                  <li className="ul-li">Women (21)</li>
                  <li className="ul-li">Women (21)</li>
                </ul>
              </div>
            </div>
            <div className="category-div mt-4 row">
              <h6 id="category-txt">Recent Posts</h6>
              <RecentPost postImg="recentBlogImg1.png" />
              <RecentPost postImg="recentBlogImg1.png" />
              <RecentPost postImg="recentBlogImg1.png" />
            </div>

            <div className="category-div mt-4 row">
              <h6 id="category-txt">Sale Product</h6>
              <RecentPost postImg="saleImage.png" />
              <RecentPost postImg="saleImage.png" />
              <RecentPost postImg="saleImage.png" />
            </div>

            <div className="category-div mt-4 row">
              <h6 id="offer-txt">Offer Product</h6>

              <OfferProduct img="offerproductimg.png" />
              <OfferProduct img="offerproductimg.png" />
              <OfferProduct img="offerproductimg.png" />
              <OfferProduct img="offerproductimg.png" />
            </div>
            <div className="category-div mt-4 row">
              <h6 id="follow-txt">Follow</h6>
              <div className="share-icons">
                <span>
                  <i
                    className="fa fa-facebook"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fa fa-instagram"
                    style={{ color: "#FB2E86", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fa fa-twitter-square"
                    style={{ color: "#37DAF3", paddingLeft: "8px" }}
                  />
                </span>
              </div>
            </div>

            <div className="tags-div mt-4">
              <h6 id="tag-txt" className="mt-4">
                Tags
              </h6>
              <div className="cat-flex2 mt-2">
                <ul>
                  <li className="ul-li2">General</li>
                  <li className="ul-li2">Insas</li>
                  <li className="ul-li2">Astanil</li>
                  <li className="ul-li2">Nulla</li>
                  <li className="ul-li2">Bibsaas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BlogPage;
