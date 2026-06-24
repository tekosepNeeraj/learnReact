import { useState } from "react"


function InputExample(){
    const [name,setName]=useState("");
    return(
        <>
        <h1>Input Example Component</h1>
        <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/>
        <p>Hello ,{name || "Guest"}</p>
        </>
    )

}
export default InputExample