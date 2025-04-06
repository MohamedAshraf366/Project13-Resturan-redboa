import { memo } from "react"
import { blogContent } from "../utalities"
import { NavLink } from "react-router-dom"
import Search from "./search"

let BlogRightSide = () => {
  return (
    <div className="col-md-3">
      {/* Search */}
      <Search />

      {/* Recent Posts */}
      <div className="mt-5">
        <h1 className="font-pirate"><span className="commentLeave">Recent</span> Posts</h1>
        <ul className="blogRightList mt-3">
          {[...blogContent].slice(()=>0.5 - Math.random())
          .slice(0,4)
          .map((m) => (
            <li key={m.id} style={{ fontSize: '14px' }}>
              <NavLink to={`/blog/${m.id}`}>{m.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mt-5">
        <h1 className="font-pirate commentLeave">Categories</h1>
        <ul className="blogRightList mt-3">
          {[...new Set(blogContent.flatMap(m => m.category))].map((category) => (
            <li key={category} style={{ fontSize: '14px' }}>
              <NavLink to={`/blog/category/${category}`}>{category}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="mt-5">
        <h1 className="font-pirate commentLeave">Tags</h1>
        {[...new Set(blogContent.flatMap(m => m.category))].map(category => (
          <NavLink key={category} to={`/blog/category/${category}`}>
            <button className="m-1 text-white bg-99 pt-2 pb-2 ps-3 pe-3 rounded-3 border-0" style={{ fontSize: '14px' }}>
              {category}
            </button>
          </NavLink>
        ))}
      </div>
      <br />
    </div>
  )
}

export default memo(BlogRightSide)
