import {Routes, Route} from "react-router-dom";
import Ntwist from "../ntwist.com-home/Ntwist";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/ntwist" element={<Ntwist/>} />
        </Routes>
    )
}
export default AppRoutes