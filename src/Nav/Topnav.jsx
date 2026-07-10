import { NavLink } from "react-router-dom"
import "./Topnav.css"
function Topnav(){
    return(     
        <div className="topnavdiv">
            <div className="Navlinkdiv">
                <NavLink to="/linktag" className="topnavlink">Link tag</NavLink>
            </div>
            <div className="Navlinkdiv">
                <NavLink to="/navtag" className="topnavlink">Nav Tag</NavLink>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/counter" className="topnavlink">Counter</NavLink>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/media" className="topnavlink">Media</NavLink>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/" className="topnavlink">Button Nav</NavLink>
            </div>

            <div className="Navlinkdiv">
                <NavLink to="/forms" className="topnavlink">Forms</NavLink>
            </div>
            
        
        </div>
    )
}

export default Topnav