describe("Testing Verifier website", () => {
  it("Успешная загрузка сайта sqlverifier", () => {
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/");

    cy.contains('Tasks').should('be.visible')
  });
});

