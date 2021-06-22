import React from "react";
import "./index.css";

function Playlist(props) {
    return (
        <div className = "slideBar">
            <img src = {props.image} alt = "random image"/>
        </div>
    );
}

export default Playlist;