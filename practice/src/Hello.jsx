

function Hello(){

    const getName=(yourname)=>{
        return yourname
    }
    const name="Radha";
    const name1="krishna";

    const handleMouseOver=()=>
        console.log("Mouse over on text");

    const handleMouseDoubleClick=()=>
        console.log("Mouse Double Click on text");


    const fruits=["Apple","Banana","Orange"];

    
        
    return (
        <>
            <h2>Hello Component</h2>
            <br />
            <h1>Hello {getName(name)} </h1>
            <h2>Bye {getName(name1)}</h2>
            <br />
            <p onMouseOver={handleMouseOver} onDoubleClick={handleMouseDoubleClick}> I am Paragraph you can use me for paragraph</p>

            <br />

                <h2>Fruit list</h2>
                <ul>
                    {fruits.map((fruit,index)=>(
                        <li>{index} - {fruit}</li>
                    ))}
                </ul>

        </>
    )
}
export default Hello;