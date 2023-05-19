const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { task, isCompleted, completedTime, creationTime } = req.body;
  ToDoModel.create({ task, isCompleted, completedTime, creationTime })
    .then((data) => {
      console.log("Task added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
module.exports.completeTodo = (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndUpdate(_id, {
    completedTime: Date.now(),
    isCompleted: true,
  })
    .then(() => res.status(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
