import { SigninPage } from "../../pages/verifier_signin";
const signinPageElements = require("../../fixtures/verifier/signinPageSelectors.json");
describe("Sign in to the Verifier website", () => {
  let signinPage = new SigninPage();
  let userName = "val_student";
  let correct_password = "12345";

  it("Sign in and log out", () => {
    cy.visit("/login");
    signinPage.signin(userName, correct_password);
    cy.contains("Swagger").should("exist");
    cy.get("#account-menu").click();
    cy.get(signinPageElements.logoutButton).click();
  });
});
