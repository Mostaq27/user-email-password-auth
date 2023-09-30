import { Outlet } from "react-router-dom";
 
import Header from "../Header/Header";

 

 const Root = () => {
    return(
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
 };
 export default Root;