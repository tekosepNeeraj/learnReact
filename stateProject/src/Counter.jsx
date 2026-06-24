import {useState} from "react";
import "./App.css"
import Button from "./components/Button/Button";

function Counter (){
const[count,setCount] = useState(0);

const increase= () =>{
    setCount(count+1);
}
const decrease =() =>{
    if(count>0){
        setCount(count-1);
    } 
}

return (
    <>
    <h2>Counter : {count} </h2>
       <Button children="Increase" variant="success" onClick={increase}/> &nbsp;
       <Button children="Decrease" variant="cancel" onClick={decrease}/>
    </> )
}
export default Counter;