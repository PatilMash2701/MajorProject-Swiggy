import RestHeader from "./RestHeader";
import {Outlet} from "react-router";
 

function SecondaryHome(){
  
    return (
        <>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
        </>
    )



}

export default SecondaryHome;