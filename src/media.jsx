import img1 from "./assets/react.svg"
function Media(){
    return(
        <div>
            <h1>Media</h1>
            <img src={img1}/>
            <video controls>
                <source src=""/>
            </video>
        </div>
    )
}

export default Media;
