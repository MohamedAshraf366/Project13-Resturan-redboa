import { memo } from "react"
import welcome1 from '../pic/welcome1.jpg'
import welcome2 from '../pic/welcome2.jpg'
let AboutUs = ()=>{
    return(
        <>
        <div className="container  aboutUs">
        <div className="row">
            <p className="text-99">Steak & Wine</p>
            <div className="col-md-7">
                
                <h1 className="font-pirate" style={{fontSize:'50px'}}>Welcome to <span className="text-99">REDBOA</span></h1>
                <p>Place where you can have a great time with your family and friends, and, of course, try the best steaks and wine in 24 King Street, Charleston South Carolina.</p>
                <p>Maecenas viverra lorem eget ex mollis, ut gravida est luctus. Maecenas eu tellus vel nunc ullamcorper iaculis non varius turpis. Duis fringilla sollicitudin porta. Vivamus fringilla lacus et velit consectetur, ut consectetur ultricies condimentum nisi consequat in.</p>
                <p>Quality viverra lorem eget ex mollis, ut gravida est luctus. Maecenas eu tellus vel nunc ullamcorper iaculis non varius turpis. Duis fringilla sollicitudin porta. Vivamus fringilla lacus et velit consectetur, utcon sectetur urna pharetra. Vestibulum ultricies pulvinar lectus, non condimentum nisi consequat in.</p>
            </div>
            <div className="col-md-5" style={{marginTop:'30px'}}>
                <div className="iamge1">
                    <img className="img-fluid" src={welcome1} />
                </div>
                <div className="iamge1 mt-3">
                <img className="img-fluid" src={welcome2} />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default memo(AboutUs)