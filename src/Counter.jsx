import { useState } from 'react';
function Counter(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>Count</h1>
            <h1>{count}</h1><br/>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
 
        </div>
    )
}

export default Counter;                             