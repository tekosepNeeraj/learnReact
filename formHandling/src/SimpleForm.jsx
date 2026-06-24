import { useState } from "react";

function SimpleForm(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("form clicked");
        console.log("name ",name);
        console.log("email ",email);
    }

    return(
        <>

            <form onSubmit={handleSubmit}>
                <h2>React Simple form</h2>
                <label htmlFor="nameInput">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br />
                <label htmlFor="emailInput">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
                <button type="submit">save</button>
            </form>

        </>
    )

}
export default SimpleForm;