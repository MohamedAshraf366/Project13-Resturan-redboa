import { memo } from "react"
import {  NavLink } from "react-router-dom"
import logo from '../pic/logo.png'

let LeftSide = ()=>{
    return(
        <>
        <nav className="navbar">
        <div className="container-fluid">       

        <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
                <a className="navbar-brand" href="/Project13-Resturan-redboa">
                <img src={logo} className="img-fluid" 
                style={{width:'100px', height:'80px', marginTop:'6px', marginLeft:'10px'}} />
                <h1 className="text-99 font-pirate fw-bolder" style={{fontSize:'44px'}}>REDBOA</h1>
                <small>STEAK & WINE</small>
                </a>
            </div>
            <div className="col-md-12 text-center">
            <p className="fw-bold fs-5 mb-1">Rezervation</p>
            <p className="text-99 fs-3 font-pirate">0201111166832 - 0201551096474</p>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////// */}
            <div className="col-md-12">
                {/* Offcanvas يحل محل القائمة المنسدلة التقليدية */}
                <div className="" >
                    <div className="mt-1 d-flex flex-column me-auto offcanvas-body fs-3 fw-bold font-pirate">
                        <NavLink to={'/'} className="">Home</NavLink>
                        <NavLink to={'/aboutus'} className="">About Us</NavLink>
                        <NavLink to={'/menu'} className="">Menu</NavLink>
                        <NavLink to={'/gallery'} className="">Gallery</NavLink>
                        <NavLink to={'/blog'} className="">Blog</NavLink>
                        <NavLink to={'/contact'} className="">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </nav>
        </>
    )
}
export default memo(LeftSide)
