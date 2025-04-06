import { memo, useState } from "react";
import { blogContent } from "../utalities";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BlogRightSide from "./blogRightSide";

let Blog = () => {
  let itemsPerPage = 3; // number of posts per page
  let [currentPage, setCurrentPage] = useState(1);

  // To calculate the items that the next page should begin
  let indexOfLastPost = currentPage * itemsPerPage;
  let indexOfFirstPost = indexOfLastPost - itemsPerPage;

  // Get current posts for the current page
  let currentPosts = blogContent.slice(indexOfFirstPost, indexOfLastPost);

  let totalPages = Math.ceil(blogContent.length / itemsPerPage);

  // Handle page change and scroll to top
  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  return (
    <>
      <div className="blog">
        <div className="blog-header text-center text-white" style={{ lineHeight: "32px" }}>
          <div className="blog-header-overlay" style={{ paddingTop: "80px" }}>
            <p className="">Our Blog</p>
            <span className="font-pirate pb-2" style={{ fontSize: "60px" }}>
              Latest News
            </span>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="blog-body mt-5 container" style={{ width: "80%" }}>
          <div className="row blog-body-left">
            {/* Left side */}
            <div className="col-md-9">
              {currentPosts.map((m) => (
                <div key={m.id} className="card mb-3 border-0">
                  <NavLink to={`/blog/${m.id}`}>
                    <img src={m.url} className="card-img-top img-fluid" alt={m.title} />
                  </NavLink>
                  <div className="card-body">
                    <NavLink to={`/blog/${m.id}`}>
                      <h1 className="text-dark card-title font-pirate" style={{ textTransform: "capitalize" }}>
                        {m.title}
                      </h1>
                    </NavLink>
                    <p className="card-text">
                      <small>April 4, 2025</small>
                    </p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ab nulla eos...
                    </p>
                    <NavLink to={`/blog/${m.id}`} className="details text-99 fs-5 font-pirate" style={{ textDecoration: "none" }}>
                      Details
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            {/* Right side */}
            <BlogRightSide />
            {/* To show pagination - page Number */}
            {/* Pagination */}
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>
                  Previous
                </a>
              </li>

              {/* عرض أرقام الصفحات */}
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <a className="page-link" href="#" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </a>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
                  Next
                </a>
              </li>
            </ul>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Blog);
