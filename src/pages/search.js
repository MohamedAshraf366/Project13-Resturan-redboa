import { memo, useState } from "react"
import { blogContent } from "../utalities"
import { NavLink, useNavigate } from "react-router-dom"

let Search = ()=>{
    let[searchText, setSearchText] = useState('')
    let naviate = useNavigate()
    
    let seatchItem = (e)=>{
        e.preventDefault();
        if(searchText.trim() !== ''){
          //use encodeURIComponent() to convert spaces and sympols to safe to use in link
          naviate(`/search?m=${encodeURIComponent(searchText)}`)
        }
    }
return(
<>
{/* Search */}
<form className="d-flex align-items-center gap-2" onSubmit={seatchItem}>
    <input  value={searchText} onChange={(e) => setSearchText(e.target.value)}
     className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
    <button type="submit" className="bo rounded-2 pt-1 pb-1 ps-2 pe-2 brder-0 bg-99 text-white">
        <i className="fa fa-search"></i>
    </button>
    </form>
<datalist id="datalistOptions">
    <option value="Starters" />
    <option value="Mains" />
    <option value="Breakfast" />
    <option value="Steak" />
    <option value="Tea" />
    <option value="Wine" />
</datalist>
</>
)
}
export default memo(Search)
