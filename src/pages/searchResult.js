import { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { blogContent } from "../utalities";
import BlogRightSide from "./blogRightSide";

let SearchResult = () => {
  let location = useLocation(); // current URL
  let queryParams = new URLSearchParams(location.search); // ?m=Mains
  let query = queryParams.get("m")?.toLowerCase() || "";

  let results = blogContent.filter((m) =>
    m.title.toLowerCase().includes(query) ||
    m.category.some((cat) => cat.toLowerCase().includes(query))
  );
  

  return (
    <>
      <div className="blog">
        {/* Header */}
        <div
          className="blog-header text-center text-white"
          style={{ lineHeight: "32px" }}
        >
          <div className="blog-header-overlay" style={{ paddingTop: "120px" }}>
            <span className="font-pirate pb-2" style={{ fontSize: "60px" }}>
              Search Result : {query}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="blog-body mt-5 container" style={{ width: "80%" }}>
          <div className="row blog-body-left">
            {/* Left side */}
            <div className="col-md-9">
              {results.length === 0 ? (
                <h1 className="mt-5 ms-4">No result for this search</h1>
              ) : (
                results.map((m) => (
                  <div key={m.id} className="card mb-3 border-0">
                    <NavLink to={`/blog/${m.id}`}>
                      <img
                        src={m.url}
                        className="card-img-top img-fluid"
                        alt={m.title}
                      />
                    </NavLink>
                    <div className="card-body">
                      <NavLink to={`/blog/${m.id}`}>
                        <h1
                          className="text-dark card-title font-pirate"
                          style={{ textTransform: "capitalize" }}
                        >
                          {m.title}
                        </h1>
                      </NavLink>
                      <p className="card-text">
                        <small>April 4, 2025</small>
                      </p>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto ab nulla eos...
                      </p>
                      <NavLink
                        to={`/blog/${m.id}`}
                        className="details text-99 fs-5 font-pirate"
                        style={{ textDecoration: "none" }}
                      >
                        Details
                      </NavLink>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right side */}
            <BlogRightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(SearchResult);
