const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.status(200).json({ todo: todos, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }

  // return res.status(500).json({ data: null, error: error });
};
module.exports.getOneToDo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await ToDoModel.findById(todoId);

    if (!todo) {
      return res.status(404).json({ todo: null, error: "Todo not found" });
    }

    res.status(200).json({ todo: todo, error: null });
  } catch (error) {
    res.status(500).json({ todo: null, error: error.message });
  }
};


module.exports.saveToDo = (req, res) => {

  const { task, isCompleted, completedTime, creationTime } = req.body;

  ToDoModel.create({ task, isCompleted, completedTime, creationTime })
    .then((data) => {
      console.log("Task added Successfully...");
      console.log(data);
      res.status(201).json({ data: data, error: null });
    })
    .catch((error) => {
      return res.status(500).json({ data: null, error: error });
    });
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params; // Use req.params to get the ID from the URL parameters
  ToDoModel.findByIdAndDelete(id)
    .then(() => res.status(201).send("Deleted Successfully...")) // Use res.status to set the response status
    .catch((err) => console.log(err));
};


module.exports.completeTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    await ToDoModel.findByIdAndUpdate(_id, {
      completedTime: Date.now(),
      isCompleted: true,
    });
    res.status(201).json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

