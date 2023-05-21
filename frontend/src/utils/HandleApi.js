import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
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

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDoList) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
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

export { getAllToDo, addToDo, updateToDo, deleteToDo, completeTodo };
