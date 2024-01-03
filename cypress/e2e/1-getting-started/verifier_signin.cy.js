import { SigninPage } from "../../pages/verifier_signin";

describe("Sign in to the Verifier website", () => {
  
  let signinPage = new SigninPage();
  let userName = "val_student";
  let correct_password = "12345";
  let wrong_password = "abcde";

  it("Positive test", () => {
    cy.visit("/login");
    signinPage.signin(userName, correct_password);
    cy.contains("Swagger").should("exist");
  });

  it("Negative test", () => {
    cy.visit("/login");
    signinPage.signin(userName, wrong_password);
    cy.contains("Failed to sign in!").should("exist");
  });
});
