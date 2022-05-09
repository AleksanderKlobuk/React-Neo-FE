import axios from "axios";
import React, { useState} from "react";

/*const api = axios.create({
    baseURL:"http://localhost:3002/products"
})*/

function ApiCommunication(){

    const [item, setItems] = useState([]);


    const getItems = ()=>{
        axios.get("http://localhost:3002/products")
        .then(response =>{
            console.log(response.data)
            setItems(response.data.item)
        }).catch(err=> console.log(err))
    }
    return(      
    <div>
        <h1>UAPI Requests</h1>
   
    <button onClick={getItems}>Get Products</button>
    <p>{item}</p>
    </div>)
};

export default ApiCommunication;

