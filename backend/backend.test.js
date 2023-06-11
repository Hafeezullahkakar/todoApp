const request = require("supertest");

const baseURL = "http://localhost:5000";

describe("Testing Todo App Via Jest", () => {
  test("Test getting all todos", async () => {
    const response = await request(baseURL).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test("Test creating new todo", async () => {
    const newTodo = {
      task: "Test task by adding new todo!",
      isCompleted: false,
      creationTime: Date.now(),
    };

    const response = await request(baseURL).post("/save").send(newTodo);
    expect(response.status).toBe(201);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.task).toBe(newTodo.task);
    expect(response.body.data.isCompleted).toBe(newTodo.isCompleted);
  }, 100000);

  test("Test completing a todo", async () => {
    // Create a new todo
    const newTodo = {
      task: "Test task to mark completed",
      isCompleted: false,
      creationTime: Date.now(),
    };

    const response = await request(baseURL).post("/save").send(newTodo);
    //extract newtodo ID
    const newTaskID = await response.body.data._id;

    // Call the API to complete the todo
    const response1 = await request(baseURL)
      .put("/completed")
      .send({ _id: newTaskID });
    expect(response1.status).toBe(201);
    const respone2 = await request(baseURL).get(`/${newTaskID}`);
    expect(respone2.status).toBe(200);
    expect(respone2.body.todo.isCompleted).toBe(true);
  }, 10000);

  test("Test deleting a todo", async () => {
    // Create a new todo
    const newTodo = {
      task: "Test task to mark deleted",
      isCompleted: false,
      creationTime: Date.now(),
    };

    const response = await request(baseURL).post("/save").send(newTodo);
    //extract newtodo ID
    const newTaskID = await response.body.data._id;

    // Call the API to delete the todo
    const response1 = await request(baseURL)
      .delete(`/delete/${newTaskID}`) // Append the ID to the URL as a parameter
      .send();

    // Assert the response status
    expect(response1.status).toBe(201);
    expect(response1.text).toBe("Deleted Successfully...");
  }, 10000);
});
