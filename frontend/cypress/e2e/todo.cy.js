/// <reference types="cypress" />

describe("Testing Todo App in MERN", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // it("Show all already saved todos", () => {
  //   cy.get(".todo_list").should("have.length", 1);
  // });

  it("Add new todo via Enter button in keyboard", () => {
    const newtodo = "Testing new todo via cypress via ENTER...";
    cy.get("[data-test=new-todo]").type(`${newtodo}{enter}`);
  });
  it("Add new todo via Add button", () => {
    const newtodo = "Testing new todo via cypress via Add button";
    cy.get("[data-test=new-todo]").type(`${newtodo}`);
    cy.get("[data-test=new-todo-button]").click();
  });

  it("mark todo as completed", () => {
    cy.contains(
      ".task_plus_icons",
      "Testing new todo via cypress via Add button"
    ).within(() => {
      // Click on the done icon
      cy.get(".done_Icon").click();
    });
  });
  it("delete a todo", () => {
    cy.contains(
      ".task_plus_icons",
      "Testing new todo via cypress via ENTER..."
    ).within(() => {
      // Click on the delete icon
      cy.get(".del_icon").click();
    });
  });
});
