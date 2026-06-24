import { useState } from "react"


function MultipleInput(){

    const [formData,setFormdata]=useState({
        name:"",email:"",age:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
const handleChange=(e)=>{
    const {name, value}=e.target;

    setFormdata((pre) =>({
        ...pre,
        [name]:value
    }))
}


return(
    <>
    <h1>Multiple Input Form</h1>
    <form onSubmit={handleSubmit}>
        <label> Name </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} /> <br />

        <label> Email </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} /> <br />

        <label> Age </label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} /> <br />

        <button type="submit"> save </button>
    </form>
    </>
)

}
export default MultipleInput