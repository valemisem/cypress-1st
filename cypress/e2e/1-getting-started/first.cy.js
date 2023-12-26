describe("first tests suit", () => {
  // before (() => {
  //     cy.log('before hook executed')
  // })

  // after (() => {
  //     cy.log('after hook executed')
  // })

  beforeEach(() => {
    cy.visit("/todo");
  });

  it("tests with the admin page", () => {
    const testBaseUrl = Cypress.env("testBaseUrl");
    Cypress.config("baseUrl", testBaseUrl); // or we just do another config file, npx cypress run --config-file cypress.config-2.js
    // cy.visit('/todo')
    cy.get("h1").should("be.visible");
  });

  it("test for .then()", () => {
    // cy.visit('/todo') // I used config-2
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get(".todo-list li").then((number) => {
      // cy.log(JSON.stringify(number)) // вернули количество элементов, объекты и массивы выводятся в JSON
      expect(number.length).to.equal(5);
    });
  });

  /////////////////////////////////////////////////////////////////////////////

  const inputField = '[data-test="new-todo"]';
  const textData = require("../../fixtures/todoItemsText.json"); 
  // JSON: либо можем сделать массив [] и обращаться к item без свойства text

  it.only("Add items", () => {
    textData.forEach((item) => {
      cy.enterText(inputField, item.text);
    });
    // cy.log(textData[0].text) // поучить свойство первого объекта массива

    // cy.enterText(inputField, "buy milk");

    // cy.get('[data-test="new-todo"]').type('buy milk{enter}')
    // cy.get(inputField).type("take a rest{enter}");
    // cy.get(inputField).type("enjoy{enter}");
  });
});
