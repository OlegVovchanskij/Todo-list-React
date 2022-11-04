import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import "./app.css";
import { useState } from "react";
import Item from "./components/Item/Item";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);
  const addToDo = (todo) => {
    if (!todo.text) return;
    else {
      // localStorage.setItem("items", JSON.stringify(todos));
      setTodos([todo, ...todos]);
    }
  };
  const remove = (id) => {
    setTodos(todos.filter((item) => item.id == id));
  };

  return (
    <div className="wrap ">
      <div className="container">
        {todos.map((item, index) => {
          return (
            <Item func={remove} key={index} num={index + 1} text={item.text} />
          );
        })}
        <TodoForm onSubmit={addToDo} />
      </div>
    </div>
  );
}

export default App;
