import { memo, useState } from "react"
import { useParams } from "react-router-dom"
import { blogContent } from "../utalities";
import BlogRightSide from "./blogRightSide";
import Comment from "./comment";

let SpeciifcItem = ()=>{
    let {id} = useParams();
    let specificItem = blogContent.find((m)=>m.id ===  parseInt(id))
return(
<>
    <div className="blog">
        <div className="blog-header text-center pt-5 text-white"style={{lineHeight:'32px'}}>
            <div className="blog-header-overlay " style={{paddingTop:'80px'}}>
                <span className="font-pirate specificItemHeader" style={{fontSize:'60px'}}> {specificItem.title}</span>
            </div>
        </div>
        <div className="container">
        <div className="row g-0 pt-5 ms-4" style={{width:'92%'}}>
            <div className="col-md-9">
                <div className="w-100 specificItemImage">
                    <img src={specificItem.url} className="img-fluid rounded-2" />
                </div>
                <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem voluptates corporis? Quaerat laboriosam impedit quo ea! Nostrum eius temporibus hic atque doloribus, maiores explicabo debitis, optio doloremque, cupiditate accusamus.</p>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem voluptates corporis? Quaerat laboriosam impedit quo ea! Nostrum eius temporibus hic atque doloribus, maiores explicabo debitis, optio doloremque, cupiditate accusamus.</p>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem voluptates corporis? Quaerat laboriosam impedit quo ea! Nostrum eius temporibus hic atque doloribus, maiores explicabo debitis, optio doloremque, cupiditate accusamus.</p>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem voluptates corporis? Quaerat laboriosam impedit quo ea! Nostrum eius temporibus hic atque doloribus, maiores explicabo debitis, optio doloremque, cupiditate accusamus.</p>
                <br /><br />
                <Comment />
        </div>
            
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
        <BlogRightSide />
        </div>
        </div>
    </div>
       
 
</>
)
}
export default memo(SpeciifcItem)