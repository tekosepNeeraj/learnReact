import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, { text: newTodo, complited: false }]);
       setNewTodo('');
    }
  }

  const handleDelete = (i) => {
    const newTodos=[...todos];
    newTodos[i].complited= ! newTodos[i].complited ;
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} placeholder="Add New todo" />
        <button type="submit">Add Todo</button>
      </form>

      <h1>My Todos List</h1>
      <ul>
        {todos.map((td, index) => (
          <li key={index}>
            <span style={{textDecoration:td.complited ? 'line-through' : 'none'}}>{td.text}</span> &nbsp; &nbsp;
            <button onClick={()=>handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todo;
