import  React,{useState} from "react";

function UseStateCounter(){
    const [count, setCount]= useState(0);


    //FUNCTION THAT SUPPOSED TO DECREMENT count
    function decrement(){
        setCount(count-1)
    }
    //FUNCTION THAT SUPPOSED TO INCREMENT count
    function increment(){
        setCount(count +1)
    }

    return(
    <>
    <>{Notes}</>
    <h1>USE STATE</h1>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    
    </>)
};

export default UseStateCounter;



const Notes = (
    <p >Remember: 
    <li>React hooks can be used only with function components, not with const</li>
    <li>useState cannot be use inside if if statement or inside of functions, loops, the cannot be nested in anything. They must be at the top level</li>
    <li>const [count, setCount] = useState()______\first elemtn (count) is current state and 2nd element (setCount) is a function that should be applied to state   </li>
    </p> )