import { useState } from "react";
import Button from "../Button/Button";


function ToggleText(){
    const [isVisible,setisVisible]=useState(false);
    return(
        <>
         <Button children={isVisible ? "Hide Text" : "Show Text"} variant="primary" onClick={()=>setisVisible(!isVisible)}/>
         {isVisible && "I am the secret paragraph Haa Haa Haa ... "}
        </>
    )
}
export default ToggleText;