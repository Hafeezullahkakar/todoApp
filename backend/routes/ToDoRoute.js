const { Router } = require("express");

const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
  completeTodo,
  getOneToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.get("/:id", getOneToDo);

router.post("/save", saveToDo);

router.put("/completed", completeTodo);
// router.delete("/delete", deleteToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
