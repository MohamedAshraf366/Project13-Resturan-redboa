import { memo } from "react"
import { galleryImages } from "../utalities"
import { Cursor } from "react-bootstrap-icons"

let Gallery = ()=>{
return(
<>
    <div className="gallery">
        <div className="gallery-header text-center pt-5"style={{lineHeight:'32px'}}>
            <p className="text-99">REDBOA</p>
            <span className="font-pirate pb-2" style={{fontSize:'60px'}}> Gallery</span>
        </div>
        <div className="gallery-body container mt-4" style={{width:'90%'}}>
            <div class="card border-0">
                <div className="row gy-3">
                {galleryImages.map((m)=>(
                    <div className="col-md-4">
                        <div className="card gallery-body-card" style={{cursor:'pointer'}}
                        data-bs-toggle="modal" data-bs-target="#myModal">
                            <img src={m.url} className="card-img" alt={m.category} />
                            <div className="card-img-overlay">
                                <h1 className="card-title text-white text-center font-pirate">{m.category}</h1> 
                            </div>
                        </div>
                        <div class="modal fade" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                    
                          <div class="modal-header">
                            <h4 class="modal-title ms-auto">{m.category}</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          <div class="modal-body">
                          <img src={m.url} className="card-img" alt={m.category} />
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    
                ))}
                </div>
                
            </div>
        </div>
    </div>
</>
)
}
export default memo(Gallery)