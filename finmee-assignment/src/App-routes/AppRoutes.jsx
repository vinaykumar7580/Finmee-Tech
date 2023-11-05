import {Routes, Route} from "react-router-dom";
import Ntwist from "../ntwist.com-home/Ntwist";
import Home from "../Home";
import Github from "../github.com-home/Github";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ntwist" element={<Ntwist/>} />
            <Route path="/github" element={<Github/>} />
        </Routes>
    )
}
export default AppRoutes