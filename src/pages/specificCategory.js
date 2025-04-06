import { memo } from "react"
import { NavLink, useParams } from "react-router-dom"
import { blogContent } from "../utalities"
import BlogRightSide from "./blogRightSide"

let SpecificCategory = () => {
  let { category } = useParams()
  let specificCategory = blogContent.filter((m) => m.category.includes(category))

  return (
    <>
      {specificCategory.length === 0 ? (
        <h1 className="text-center mt-5">No items in this category</h1>
      ) : (
        <div className="blog">
          {/* Header */}
          <div className="blog-header text-center text-white" style={{ lineHeight: '32px' }}>
            <div className="blog-header-overlay" style={{ paddingTop: '120px' }}>
              <span className="font-pirate pb-2" style={{ fontSize: '60px' }}>
                Category : {category}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="blog-body mt-5 container" style={{ width: '80%' }}>
            <div className="row blog-body-left">
              {/* Left side (posts) */}
              <div className="col-md-9">
                {specificCategory.map((m) => (
                  <div key={m.id} className="card mb-3 border-0">
                    <NavLink to={`/blog/${m.id}`}>
                      <img src={m.url} className="card-img-top img-fluid" alt={m.title} />
                    </NavLink>
                    <div className="card-body">
                      <NavLink to={`/blog/${m.id}`}>
                        <h1 className="text-dark card-title font-pirate" style={{ textTransform: 'capitalize' }}>
                          {m.title}
                        </h1>
                      </NavLink>
                      <p className="card-text">
                        <small>April 4, 2025</small>
                      </p>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ab nulla eos...
                      </p>
                      <NavLink to={`/blog/${m.id}`} className="details text-99 fs-5 font-pirate" style={{ textDecoration: 'none' }}>
                        Details
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right side */}
              <BlogRightSide />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(SpecificCategory)
