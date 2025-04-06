 import { memo, useEffect, useState } from "react"
 
 let Comment = ()=>{
    let [formData, setformData] = useState({fName:"", email:'', textArea:''})
    
    let[comments, setComments] = useState([])
    useEffect(()=>{
        let storedComments = JSON.parse(localStorage.getItem('comm')) ||[]
        setComments(storedComments);
    }, [])
    let handleChange = (e)=>{
        setformData({...formData,[e.target.name]: e.target.value})
    }
    let  addComent = (e) => {
        e.preventDefault();
        if(!formData.email.trim()||!formData.fName.trim() || !formData.textArea.trim()){
            alert('Thanks to fill empty field')
            return
        }
        else{
            let newComments = {
                id: Date.now(), //use current timestamp to create unique id for each comment
                name:formData.fName,
                email:formData.email,
                textArea:formData.textArea,
                time: new Date().toLocaleString(), // 🕒 التاريخ والوقت الحالي
            }
            let updateComments = [newComments, ...comments];
            localStorage.setItem('comm', JSON.stringify(updateComments))
            setComments(updateComments)
            setformData({fName:'', email:'', textArea:'' })
        }
    }
return(
<>
{/* Comments */}
<h1 className="font-pirate ">Comments</h1>
<div className="">
    {comments.length === 0 ?(
        <h1>No Comments</h1>
    ):(
        comments.map((m)=>(
            <div className="row border p-3 gy-3 mt-3 mb-4" style={{lineHeight:'10px'}}>
                <div className="col-md-2 d-flex align-items-center">
                    <i className="fs-1 p-2 rounded-circle border border-3 fi fi-rr-user"></i>
                </div>
                <div className="col-md-10">
                    <p className="font-pirate fw-bolder text-99 fs-3">{m.name}</p>
                    <p>{m.email}</p>
                    <small>{m.time}</small>
                    <p className="mt-3">{m.textArea}</p>
                </div>
            </div>
        ))
    )}

</div>
<h1 className="font-pirate "><span className="commentLeave">Leave</span> Your Comment</h1>
<form className="mt-4" onSubmit={addComent}>
<div className="row gy-3">
<div className="col-md-6">
<div className="form-floating ">
<input name='fName' onChange={handleChange} value={formData.fName} type="text" className="form-control" id="floatingName" placeholder="Name" />
<label for="floatingName">Name</label>
</div> 
</div>
<div className="col-md-6">
<div className="form-floating ">
<input name='email' onChange={handleChange} value={formData.email} type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
<label for="floatingEmail">Email address</label>
</div>
</div>
<div className="col-md-12">
<div className="form-floating">
<textarea name='textArea' onChange={handleChange} value={formData.textArea} className="form-control" placeholder="Leave a comment here" 
id="floatingTextarea2" style={{height:"150px"}}></textarea>
<label for="floatingTextarea2">Comments</label>
</div>
</div>
<button className=" ms-3 text-white bg-99 mt-3 border-0 p-2 rounded-2 w-50" type="submit">Post Your Comment</button>
</div>
</form>
<br /><br /><br /><br />
</>
)
 }
 export default memo(Comment)
 
 