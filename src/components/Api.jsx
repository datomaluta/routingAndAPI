import React from "react";
import FetchApi from "./FetchApi";
import "./style.css";

const Api = () => {
    
    const randomPost = FetchApi(Math.floor(Math.random()*100));

    return (
        <div className="mainText">
            <h1>Here is Random Posts</h1><br />
            <pre>{JSON.stringify(randomPost, null, 2)}</pre>
        </div>
    
    );
}

export default Api;