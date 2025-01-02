import React, { useState } from "react"


const ButtonCounter = () => {
    
const[count,setCount]=useState('')

  return (
    <div>

<p> Button clicked {count} times</p>
        <button  onClick={()=>{
         
          setCount(count+1)
        }}>Click me</button>

    </div>
  )
}

export default ButtonCounter