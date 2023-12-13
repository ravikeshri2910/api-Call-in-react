import React from "react";
import ReactDOM  from "react-dom";
import Loading from "../components/LoadingGig";


const Model = props =>{

    const overLay = document.getElementById("overLay")

    return <>
    
    {ReactDOM.createPortal(<Loading/>,overLay)}
    </>

}

export default Model