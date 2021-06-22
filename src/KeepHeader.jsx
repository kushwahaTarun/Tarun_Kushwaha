import React from "react";
import custom from "./images/custom.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const KeepHeader = () => {

    return(
        <>
        <div className = "kHeader bg-info" style = {{display : "flex", flexDirection : "row"}}>

        <img src = {custom} height= "80" width = "100" className = "py-1"/>
        <h1 className = "my-auto pl-3 display-6" >Tarun Kushwaha</h1>

        </div>
        </>
    );


}

export default KeepHeader;