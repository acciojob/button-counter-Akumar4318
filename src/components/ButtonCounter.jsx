import React, { useState } from "react"


const ButtonCounter = () => {
    
const[count,setCount]=useState(0)

  return (
    <div>

<h2> Button clicked {count} time</h2>
        <button  onClick={()=>{
         
          setCount(count+1)
        }}>Click me</button>

    </div>
  )
}

export default ButtonCounter