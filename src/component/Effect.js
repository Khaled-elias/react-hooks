import React, { useState , useEffect} from 'react';


const Effect = () => {
    
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("Count2 Updated ")
    },[count2])

    useEffect(() => {
        console.log("Count Updated ")
    },[count])

    return ( 
        <div>
            <h1>Effect</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount2(count2 + 1)}>+</button>
            {count2}
        </div>
     );
}
 
export default Effect;