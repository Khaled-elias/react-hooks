import React, { useState } from 'react';



const Counter = () => {
    
    const [count, setCount] = useState(0);
  

    // const [input,setInput] = useState([
    //     { name: ""}
    // ])
    const [input,setInput] = useState("")
    return (
      <div>
       <h1> {count} </h1>  
       <button onClick={() => setCount(count + 1)}>+</button>

       {/* kann man auch so machen aber State nicht direkt nutieren, sondern brauchen den letzten zustand..*/}
       {/* <button onClick={() => setCount(prevCount =>prevCount+ 1)}>+</button> */}

       <button onClick={() => setCount(count - 1)}>-</button>
       <button onClick={() => setCount( 0)}>+Reset</button>
       <input type="text" onChange={(event) =>setInput(event.target.value)} value={input}></input>
       <p className="dodo">{input}</p>
      </div>
    );
  }
 
   
  export default Counter;