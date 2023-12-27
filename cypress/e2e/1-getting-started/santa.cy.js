import { faker } from "@faker-js/faker";
import { LoginPage } from "../../pages/loginPage";
const loginPageElements = require('../../fixtures/pages/loginPageSelectors.json')


describe("santa login - UI", () => {
  it("user cannot login with old password", () => {
    let loginPage = new LoginPage // надо создать экземпляр этого класса, чтобы с ним тут работать
    let oldPassword = "test1234";
    let newPassword = faker.internet.password(8);
    cy.log(newPassword);

    cy.visit("https://santa-secret.ru");
    cy.contains("Вход и регистрация").click({ force: true });
    loginPage.login("valentina.misem@gmail.com", oldPassword)
    // cy.get(":nth-child(3) > .frm").type("valentina.misem@gmail.com");
    // cy.get(":nth-child(4) > .frm").type(oldPassword);
    // cy.get(".btn-main").click();
    cy.wait(5000)
    cy.contains("Коробки").should("exist");

    cy.changePassword("Valentina", newPassword);

    cy.get('.form-page__header > .base--clickable > .txt--med').click();

    cy.wait(5000)
    // cy.visit("https://santa-secret.ru");
    cy.contains("Вход и регистрация").click({ force: true });
    cy.get(loginPageElements.loginField).type("valentina.misem@gmail.com");
    cy.get(loginPageElements.passwordField).type(oldPassword);
    cy.get(loginPageElements.loginButton).click();
    cy.contains("Неверное имя пользователя или пароль").should("exist");

    cy.get(":nth-child(4) > .frm").clear().type(newPassword);
    cy.get(".btn-main").click();

    cy.changePassword("Valentina", oldPassword);
  });
});

