import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import BlogCardContent from "../Components/BlogCardContent";
import BlogVideo from "../Components/BlogVideo";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import OfferProduct from "../Components/OfferProduct";
import ProductOnBlog from "../Components/ProductOnBlog";
import RecentPost from "../Components/RecentPost";
import SimilarBlog from "../Components/SimilarBlog";

function SingleBlog() {
  const [blog, setBlog] = useState({});
  const { blog_id } = useParams();
  const [dateOfBlog, setdateOfBlog] = useState("");

  const fetchSingleBlog = () => {
    fetch(`https://tola-ecommerce.herokuapp.com/api/single_blog/${blog_id}`)
      .then((response) => response.json())
      .then((blogFromDb) => {
        // console.log("blog", blogFromDb);
        setBlog(blogFromDb);
        setdateOfBlog(blogFromDb.created_at.slice(0, 10))
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);
  return (
    <div>
      <MobileNav />
      <Header desc="Single Blog" />
      <Nav desc="Single Blog" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-9">
            {
              <BlogCardContent
                blogImg={blog.blog_image}
                name={blog.author_name}
                description={blog.blog_details}
                blogDate={dateOfBlog}
                title={blog.title}
              />
            }
            <div className="row mt-4">
              <BlogVideo blogVideo="blogVideo1.png" />
              <BlogVideo blogVideo="blogVideo2.png" />
            </div>
            <div className="mt-4 video-details">
              <p>
                Copy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Velit dapibus est, nunc, montes, lacus consequat integer
                viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Velit
              </p>
            </div>
            <div className="row">
              <ProductOnBlog pic="productOnBlog1.png" productName="Quam sed" />
              <ProductOnBlog
                pic="productOnBlog2.png"
                productName="Tristique sed"
              />
              <ProductOnBlog pic="productOnBlog3.png" productName="A etiam" />
              <ProductOnBlog pic="productOnBlog4.png" productName="Mi nisi" />
            </div>
            <div>
              <p className="paragraph mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit
              </p>
            </div>
            <div>
              <p className="paragraph mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit
              </p>
            </div>
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

            <div className="previous-next-icon">
              <span className="left">
                <i className="fa fa-long-arrow-left"></i>Previous Post
              </span>
              <span className="right">
                Next Post<i className="fa fa-long-arrow-right"></i>
              </span>
            </div>
            <div className="row mt-5  mb-5">
              <SimilarBlog img="similarblog1.png" />
              <SimilarBlog img="similarblog2.png" />
              <div className="col-lg-3"></div>
            </div>
            <div className="row">
              <div className="col-lg-10" style={{ paddingLeft: "0px" }}>
                <div className="row">
                  <div className="col-lg-6 comment-name">
                    <Button
                      btnClass="comment-btn"
                      textColor="#CBCBE0"
                      btnText=""
                      iconClass="fa fa-user input-search-icon'  />"
                    />
                    <input
                      className="comment-input"
                      type="text"
                      name=""
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-6 comment-name">
                    <Button
                      btnClass="comment-btn"
                      textColor="#CBCBE0"
                      btnText=""
                      iconClass="fa fa-envelope input-search-icon'  />"
                    />
                    <input
                      className="comment-input"
                      type="text"
                      name=""
                      placeholder="Write Your Email"
                    />
                  </div>
                </div>
                <div className="comment-div">
                  <Button
                    btnClass="main-comment-btn"
                    textColor="#CBCBE0"
                    btnText=""
                    iconClass="fa fa-comment input-search-icon'  />"
                  />
                  <input
                    className="main-comment-input"
                    type="text"
                    placeholder="Write your comment"
                  />
                </div>

                <div style={{ marginLeft: "5px" }}>
                  <p className="checkbox-text">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      style={{ marginRight: "10px" }}
                    />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
                <Button
                  btnText="Continue Shipping"
                  btnClass="continue-shipping-btn"
                />
              </div>
              <div className="col-lg-2"></div>
            </div>
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
                  textColor="#CBCBE0"
                  btnClass="search-btn"
                  btnText=""
                  iconClass="fa fa-search input-search-icon' />"
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

export default SingleBlog;
