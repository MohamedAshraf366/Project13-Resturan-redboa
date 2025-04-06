import { memo } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { carouselHome } from "../utalities";
import { Link } from "react-router-dom";

let Home = ()=>{
return(
<>
<Carousel  data-bs-theme="">
    {carouselHome.map((m)=>(
        <Carousel.Item >
        <img
          className="d-block img-fluid w-100 " style={{minHeight:'100vh'}}
          src={m.url}
          alt="First slide"
        />
        <Carousel.Caption className="font-pirate homee" style={{top:'100px'}} >
          <p className="text-99" style={{fontSize:'4em'}}>{m.icon}</p>
          <p className="fs-1 fw-bolder">Welcome to REDBOA</p>
          <p className="fs-2">RedBoa Steak & Wine</p>
          <Link to={m.direc}>
          <button className="btnChangeHover text-white bg-99 rounded-5 fs-4 ps-5 pe-5 pt-2 pb-1 mb-3">{m.btnContent}</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
      
    </Carousel>
</>
)
}
export default memo(Home)




