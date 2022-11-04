import React from "react";
import { useState } from "react";
import classes from "./Form.module.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [selectVal, setSelectVal] = useState("can wait");

  const hendelSubmin = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: new Date().getTime(),
      text: input,
    });
    setInput("");
  };
  return (
    <div className={classes.formContainer}>
      <form
        onSubmit={hendelSubmin}
        name="todo-form"
        className={classes.todoForm}
      >
        <input
          className={classes.input}
          type="text"
          placeholder="Add a todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          name="text"
        />

        <button type="submit" className={classes.btn}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
