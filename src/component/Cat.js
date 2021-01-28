import { Planet  } from 'react-kawaii';

import React, { useState } from 'react';


const Cat = () => {
    const random225 = () => Math.floor(Math.random() * 225)
    const randomColor =() => setColor(` rgba(${random225()},${random225()},${random225()},${Math.random()})`)
    const moodArray =["sad","shocked","happy","blissful","lovestruck","excited","ko"]
    const [mood,setMood] = useState(moodArray[Math.floor(Math.random() * moodArray.length)])
    const[color,setColor] = useState(`rgba(${random225()},${random225()},${random225()},${Math.random()})`)
    const randomMood = () => setMood(moodArray[Math.floor(Math.random() * moodArray.length)])
    return ( 

        <div>
            <Planet  size={200} mood={mood} color={color} />
            <button onClick={() => {randomColor();randomMood() }}>Random</button>
        </div>
     );
}
 
export default Cat;

<div>

</div>