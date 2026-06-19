
function Bye(){

    const user={firstname:"Radha",lastname:"Krishna",age:16};
    function getFullname(user){
        return `${user.firstname} ${user.lastname}`
    }
    return(
      <>
      <h2> : User Details : </h2>
      <p>Full Name : {getFullname(user)}</p>
      <p>Age : {user.age} </p>
      </>
    )
}

export default Bye;