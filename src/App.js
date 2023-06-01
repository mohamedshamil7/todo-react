import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";


const Applayout=()=>{
    return(
        <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]">
        <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Applayout />)
