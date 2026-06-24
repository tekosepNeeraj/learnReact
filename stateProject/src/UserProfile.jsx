import { useState } from "react";

function UserProfile(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(18);
    
    return(
        <>
        <h1>Profile Component</h1>
        <h1>Name : {name}</h1> <br />
        <h2>Age : {age}</h2> <br />
        <button onClick={()=>setName("Hello React Js")}>Change Name</button>  &nbsp;
        <button onClick={()=>setAge(age+12)}>Change Age</button>
        </>
    )

}
export default UserProfile;