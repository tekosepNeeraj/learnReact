import { Children, useState } from "react";
import Button from "./Button";

 function LikeButton (){
 const [islinked,setisLiked]=useState(false);
 return (
        <>
            <Button children={ islinked ? " ❤️ " : " 🤍 "} variant="primary" onClick={()=>{ setisLiked(!islinked)} } />
        </>
    )
 }

 export default LikeButton;