import { useState } from "react";

function BasicFormValidation(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");


   const handleSubmit =(e) =>{
    e.preventDefault();
    if(!name || !email){
        setError("Please fill all fields");
    }else{
        setError("");
        console.log("Form Submitted", {name,email});
    }
   }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Basic form Validation</h1>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name"  /> <br />
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email" /> <br />
            <br />
            {error && <p style={{color:"red"}}>{error}</p>}

            <button type="submit">save</button>
        </form>
        </>
    )

}
export default BasicFormValidation