import Counter from "./Counter.jsx";
import Media from "./Media.jsx";
import Navtag from "./Navtag.jsx";
import { Routes,Route } from "react-router-dom";
import Linktag from "./Linktag.jsx";
import Buttonnav from "./Buttonnav.jsx";
import Sidenav from "./Nav/Sidenav.jsx";
import Forms from "./forms/Forms.jsx";
import Topnav from "./Nav/Topnav.jsx";
import Render from "./Render.jsx";
function App(){
  return (
    <>
    <Topnav/>
    <Sidenav/>
    <Render/>
    <Routes>
      <Route path="/media" element={<Media/>}/>
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/navtag" element={<Navtag/>}/>
      <Route path="/Linktag" element={<Linktag/>}/>
      <Route path="/" element={<Buttonnav/>}/>
      <Route path="/Forms" element={<Forms/>}/>
      
    </Routes>
    </>

  )
}
export default App;
