import React, { useState } from "react";

const Todo = () => {
  const initialValue = [
    { text: "Learn React", id: 0 },
    { text: "OLA", id: 1 },
    { text: "Javascript", id: 2 },
  ];

  const [todos, setTodos] = useState(initialValue);

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo) => todo.id !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo</h1>

      <ul>
        {todos.map((todo, index) => (
          <div key={`todo${index}`}>
            <li>{todo.text}</li>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
