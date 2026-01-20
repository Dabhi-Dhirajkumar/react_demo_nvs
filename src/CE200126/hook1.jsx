import React ,{useState} from "react";
export default function Hook1Example(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>Count Value:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    );
}
