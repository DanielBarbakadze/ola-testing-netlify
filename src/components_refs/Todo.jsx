import React from "react";
import useFetchRandomTodo from "../helpers/useFetchRandomTodo";
import "./styles.scss";

const Todo = () => {
  // const { todo } = useFetchRandomTodo();
  const todo = {};

  return (
    <div className="wrapper">
      {Object.keys(todo).length > 0 ? (
        <div className="todo-list-wrapper">
          <p>
            Title will be there: <b>{todo.title}</b>
          </p>
          <p>
            id: <b>{todo.id}</b>
          </p>
          <p>
            completed: <b>{todo.completed}</b>
          </p>
          <p>
            userId: <b>{todo.userId}</b>
          </p>
        </div>
      ) : (
        <div className="loading-wrapper">
          <p>Loading...</p>
        </div>
      )}

      <div className="btn-wrapper">
        <button className="btn shadow border-lg">Generate data</button>
        {/* <input type="text" placeholder="Enter id" /> */}
      </div>
    </div>
  );
};

export default Todo;
