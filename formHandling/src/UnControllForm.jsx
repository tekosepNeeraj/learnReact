
import {useRef} from "react"
function UnControllForm(){

    const nameRef=useRef();
    const emailRef=useRef();

   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("name",nameRef.current.value);
    console.log("email",emailRef.current.value);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Uncontroll form</h2>
            <label>Name</label>
            <input type="text" name="name" ref={nameRef} /> <br />

            <label>Name</label>
            <input type="email" name="email" ref={emailRef} /> <br />

            <button type="submit">save</button>
        </form>

        </>
    )

}

export default  UnControllForm