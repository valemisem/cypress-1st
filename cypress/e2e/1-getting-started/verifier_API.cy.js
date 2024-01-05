import { SigninPage } from "../../pages/verifier_signin";

describe("Create and delete a task using API", () => {
  before(() => {
    let signinPage = new SigninPage();
    let userName = "val_student";
    let correct_password = "12345";
    cy.visit("/login");
    signinPage.signin(userName, correct_password);
  });

  it("Get a list of tasks", () => {
    cy.request({
      method: "GET",
      url: `/api/tasks`,
      headers: {
        Authorization: Cypress.env("accessToken"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  
  it("Create a task using API", () => {
    cy.request({
      method: "POST",
      headers: {
        Authorization: Cypress.env("accessToken"),
      },
      url: "/api/tasks",
      body: {
        text: "random Text",
        answer: "random answer",
        title: "random title",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      const respTaskID = response.body;
      Cypress.env("ID", respTaskID.id);
    });
})

    it("Delete a task using API", () => {
      cy.request({
        method: "DELETE",
        headers: {
            Authorization: Cypress.env("accessToken"),
        },
        url: `/api/tasks/${Cypress.env("ID")}`,
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });

});
