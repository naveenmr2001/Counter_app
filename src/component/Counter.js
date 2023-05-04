import React, { useState } from 'react'

const Counter = ({initialValue}) => {
    
    const [count,setCount] = useState(initialValue??0)

    const incrementClick = () =>{
        setCount((prevCount)=>prevCount+1);
    }

    const decrementClick = () =>{
        setCount((prevCount)=>prevCount-1);
    }
    return (
        <div>
        <h1>M2P Header</h1>
        <span>{count<0 ? "Not Allowed":count}</span>
        <button onClick={()=>incrementClick()}>Add</button>
        <button onClick={()=>decrementClick()}>Sub</button>
        </div>
  )
}

export default Counter
