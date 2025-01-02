import React, { useState } from "react"


const ButtonCounter = () => {
    
const[count,setCount]=useState(0)

  return (
    <div>

<p> Button clicked {count} time</p>
        <button  onClick={()=>{
         
          setCount(count+1)
        }}>Click me</button>

    </div>
  )
}

export default ButtonCounter