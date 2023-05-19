import React, { useEffect } from "react";
import { GrDrag } from "react-icons/gr";
import {  BsFillCheckCircleFill ,BsCircle } from "react-icons/bs";
// import {BsCircle} from 'react-icons/bi'
import "./SingleTodo.css";
function SingleTodo({
  task,
  deleteToDo,
  isCompleted,
  timeCreated,
  timeCompleted,
  completeTodo,
}) {
  useEffect(() => {}, [isCompleted]);

  function convertMongoDBTimestampToLocalDate(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const localDateTime = `${year}-${month}-${day}       ${hours}:${minutes}:${seconds}`;

    return localDateTime;
  }

  return (
    <div className="singleTodo">
      <div className="task_plus_icons">
        <div className="done_icon">
          {!isCompleted ? (
            <span className="done_Icon" onClick={completeTodo}>
              <BsCircle style={{fontSize:"1.2rem"}} />
            </span>
          ) : (
            <span className="done_Icon">
              <BsFillCheckCircleFill  style={{fontSize:"1.2rem"}}/>
            </span>
          )}
        </div>
        <div className="task">
          <p className="todo_text">{task}</p>
        </div>
        <span className="del_icon">
          <GrDrag className="d_icon" onClick={deleteToDo} />
        </span>
      </div>

      <div className="time">
        <p className="created">
          Created at: {convertMongoDBTimestampToLocalDate(timeCreated)}
        </p>
        {timeCompleted ? (
          <p className="completed">
            Completed at: {convertMongoDBTimestampToLocalDate(timeCompleted)}
          </p>
        ) : (
          "pending..."
        )}
      </div>
    </div>
  );
}

export default SingleTodo;
