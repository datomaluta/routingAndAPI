import React, { useEffect, useState } from "react";
import "./style.css";


const FetchApi = (id) => {
    const [data, setData] = useState(null);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);
            });
        }, 1000);
    }, [url])
    
    return data;


}

export default FetchApi;