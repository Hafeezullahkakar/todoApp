import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then((dat) => {
    let data = dat.data.todo;
    setToDo(data);
  });
};

const addToDo = (task, setText, setTodoList) => {
  axios
    .post(`${baseUrl}/save`, { task })
    .then((data) => {
      setText("");
      getAllToDo(setTodoList);
    })
    .catch((err) => console.log(err));
};



const deleteToDo = (_id, setToDoList) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`) // Append the ID to the URL as a parameter
    .then((data) => {
      getAllToDo(setToDoList);
    })
    .catch((err) => console.log(err));
};


const completeTodo = (_id, setToDoList) => {
  axios
    .put(`${baseUrl}/completed`, { _id })
    .then((data) => {
      getAllToDo(setToDoList);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, deleteToDo, completeTodo };
