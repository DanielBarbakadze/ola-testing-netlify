import { useEffect, useState } from "react";

const useFetchRandomTodo = () => {
  let id = Math.floor(Math.random() * 199) + 1;

  const [todo, setTodo] = useState({});

  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodo(json);
      });
  }, []);

  return { todo };
};

export default useFetchRandomTodo;
