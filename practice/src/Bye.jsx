
function Bye() {
  // const user={firstname:"Radha",lastname:"Krishna",age:16};

  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      email: "john.doe@example.com",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 34,
      email: "jane.smith@example.com",
    },
    {
      firstName: "Alex",
      lastName: "Johnson",
      age: 23,
      email: "alex.j@example.com",
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      age: 31,
      email: "emily.brown@example.com",
    },
    {
      firstName: "Michael",
      lastName: "Miller",
      age: 45,
      email: "m.miller@example.com",
    },
  ];

  function getFullname(user) {
    return `${user.firstName} ${user.lastName}`;
  }
  return (
    <>
      <h2> : User Details : </h2>
      <ul>
        {users.map((user, index) => (
          <li key={user.index}>
            {getFullname(user)} is {user.age}years old
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bye;