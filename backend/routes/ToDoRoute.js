const { Router } = require("express");

const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
  completeTodo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.put("/update", updateToDo);

router.post("/delete", deleteToDo);
router.put("/completed", completeTodo);

module.exports = router;
