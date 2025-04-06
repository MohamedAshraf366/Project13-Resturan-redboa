import { memo } from "react"
import Footer from "./footer"

let Contact = ()=>{
return(
<>
    <div className="contact text-center">
        <div className="contact-header  mt-5">
            <p className="text-99">Get In Touch</p>
            <span className="commentLeave font-pirate" style={{fontSize:'60px'}}> Contact Us</span>
        </div>
        <div className="contact-body container mt-5" style={{width:'80%'}}>
            <div className="row">
                <div className="col-md-4">
                    <h1 className="font-pirate">OUR ADDRESS</h1>
                    <p>Sohag - Egypt - Akhmim</p>
                </div>
                <div className="col-md-4">
                    <h1 className="font-pirate">EMAIL & PHONE</h1>
                    <p>mohamedashraf366@gmail.com</p>
                    <p>02-01111166832</p>
                    <p>02-01551096474</p>
                </div>
                <div className="col-md-4">
                    <h1 className="font-pirate">OPENING HOURS</h1>
                    <p>MONDAY - SUNDAY</p>
                    <p>5 PM - 10:30 PM</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</>
)
}
export default memo(Contact)