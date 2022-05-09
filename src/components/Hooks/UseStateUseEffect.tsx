import axios from "axios";
import React, {useEffect, useState} from "react";

function UseStateUseEffect(){

    const [res, setResource] = useState('API DATA LOADING...');

    useEffect(()=>{console.log("hi")
    },);/*If we will not provide rule[] for  1st argumrt it will run with every render  */
    //random useEffect console.log after every render (screen refresh all call function)


//useEffect that can fetch API and provide data that later are desplayed on screen
    useEffect(()=>{
        axios
            .get("http://localhost:3002/todos")// axios gets data
            .then((response)=>//transfer it into response 
            {setResource(response.data[2].todo)})   //we run response.data under setResource function from useState
    })

    return(
    <div>
        <h1>Use State Use Effect</h1>
    <p>API DATA:</p>    
    <h3>{res}</h3>
    </div>)
}//We show API data on screen using <h3>{res}</h3> as above

export default UseStateUseEffect;

