const registrationPageElements = require("../../fixtures/verifier/registrationPageSelectors.json");
const usersDataNeg = require("../../fixtures/verifier_registration_users.json");
const usersDataPos = require("../../fixtures/varifier_registr_users_positive.json");


describe("Register to the Verifier website", () => {
  beforeEach(() => {
    cy.visit("/account/register");
  });

  it("Invalid data", () => {
    for (let i = 0; i < usersDataNeg.length; i++) {
      cy.get(registrationPageElements.usernameField)
        .clear()
        .type(usersDataNeg[i].userName);
      cy.get(registrationPageElements.emailField)
        .clear()
        .type(usersDataNeg[i].email);
      cy.get(registrationPageElements.firstPassField)
        .clear()
        .type(usersDataNeg[i].pass);
      cy.get(registrationPageElements.secondPassField)
        .clear()
        .type(usersDataNeg[i].secondPass);
      cy.get("div.invalid-feedback").should("exist");
    }
})

    it("Valid data", () => {
        for (let i = 0; i < usersDataPos.length; i++) {
          cy.get(registrationPageElements.usernameField)
            .clear()
            .type(usersDataPos[i].userName);
          cy.get(registrationPageElements.emailField)
            .clear()
            .type(usersDataPos[i].email);
          cy.get(registrationPageElements.firstPassField)
            .clear()
            .type(usersDataPos[i].pass);
          cy.get(registrationPageElements.secondPassField)
            .clear()
            .type(usersDataPos[i].secondPass);
          cy.get("div.invalid-feedback").should("not.exist");
        }
    })
    })