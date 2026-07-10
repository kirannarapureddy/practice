import { NavLink } from "react-router-dom"
import "./Sidenav.css"
function Sidenav(){
    return(
        <div className="sidenavdiv">
            <div className="Navlinkdiv">
                <NavLink to="/linktag" className="sidenavlink">Link tag</NavLink>
            </div>
            <div className="Navlinkdiv">
                <NavLink to="/navtag" className="sidenavlink">Nav Tag</NavLink>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/counter" className="sidenavlink">Counter</NavLink>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/media" className="sidenavlink">Media</NavLink>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/" className="sidenavlink">Button Nav</NavLink>
            </div>

            <div className="Navlinkdiv">
                <NavLink to="/forms" className="sidenavlink">Forms</NavLink>
            </div>
            
        
        </div>
    )
}

export default Sidenav