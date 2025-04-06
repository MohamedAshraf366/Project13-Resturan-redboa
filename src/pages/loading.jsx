import logo from '../pic/logo.png'
export const Loading = ()=>{
    return(
        <>
            <div className="loading">
                <div class="spinner">
                    <img src={logo} />
                    <h1>Loading....</h1>
                </div>
                
            </div>
        </>
    )
}