import React from "react";
import "./todo.css";
import { BiEdit } from "react-icons/bi";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
  completeTodo,
} from "../utils/HandleApi";
import { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

const ToDo = () => {
  const [todoList, setToDoList] = useState([]);
  useEffect(() => {
    getAllToDo(setToDoList);
  }, []);

  const [text, setText] = useState("");

  const [toDoId, setToDoId] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addToDo(text, setText, setToDoList);
    }
  };

  return (
    <>
      <div className="todo_input">
        <input
          type="text"
          placeholder="To do today..."
          value={text}
          className="input"
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          data-test="new-todo"
        />
      </div>

      <div className="todo_list">
        {todoList?.map((item) => (
          <SingleTodo
            key={item._id}
            task={item?.task}
            timeCreated={item.creationTime}
            timeCompleted={item.completedTime}
            isCompleted={item?.isCompleted}
            deleteToDo={() => deleteToDo(item._id, setToDoList)}
            completeTodo={() => completeTodo(item._id, setToDoList)}
          />
        ))}
      </div>

      <div className="add_button">
        <input
          type="button"
          placeholder="Add"
          data-test="new-todo-button"
          value="Add todo"
          className="input"
          onClick={(e) => addToDo(text, setText, setToDoList)}
        />
      </div>
    </>
  );
};

export default ToDo;
