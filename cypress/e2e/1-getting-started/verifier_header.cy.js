describe("Testing Verifier website", () => {
  it("Успешная загрузка сайта sqlverifier", () => {
    cy.visit("/");
    cy.get("h2").should("be.visible");
  });
});

describe("Testing header", () => {
  beforeEach(() => {
    cy.visit("/");
    const login = "val_student";
    const password = "12345";
    cy.login(login, password);
    cy.url().should("include", "/?page=1&sort=id,asc");
  });

  it("Checking navbar/home", () => {
    cy.get(".ms-auto").click();
    cy.url().should("include", "/?page=1&sort=id,asc");
  }); //1

  it("Checking entities-task", () => {
    cy.get("#entity-menu").click();
    cy.get(".dropdown-item[href='/task']").click();
    cy.url().should("include", "/task?page=1&sort=id,asc");
  }); //2

  it("Checking entities-userTask", () => {
    cy.get("#entity-menu").click();
    cy.get(".dropdown-item[href='/user-task']").click();
    cy.url().should("include", "/user-task");
  }); //3

  it("Checking swagger-API", () => {
    cy.get("#docs-menu").click();
    cy.get(".dropdown-item[href='/docs/docs']").click();
    cy.url().should("include", "/docs/docs");
  }); //4

  it("Checking lang-EN", () => {
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li:nth-child(4) > div > button:nth-child(1)"
    ).click();
    cy.get("#header-tabs > li:nth-child(1)").should("have.text", "Home");
    cy.url().should("include", "?page=1&sort=id,asc");
  }); //5

  it("Checking lang-FR", () => {
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li:nth-child(4) > div > button:nth-child(2)"
    ).click();
    cy.get("#header-tabs > li:nth-child(1)").should("have.text", "Accueil");
    cy.url().should("include", "?page=1&sort=id,asc");
  }); //6

  it("Checking lang-RU", () => {
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li:nth-child(4) > div > button:nth-child(3)"
    ).click();
    cy.get("#header-tabs > li:nth-child(1)").should("have.text", "Главная");
    cy.url().should("include", "?page=1&sort=id,asc");
  }); //7

  it("Checking lang-UKR", () => {
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li:nth-child(4) > div > button:nth-child(4)"
    ).click();
    cy.get("#header-tabs > li:nth-child(1)").should("have.text", "Головна");
    cy.url().should("include", "?page=1&sort=id,asc");
  }); //8

  it("Checking acc-settings", () => {
    cy.get("#account-menu").click();
    cy.get(".dropdown-item[href='/account/settings']").click();
    cy.url().should("include", "/account/settings");
  }); //9

  it("Checking acc-password", () => {
    cy.get("#account-menu").click();
    cy.get(".dropdown-item[href='/account/password']").click();
    cy.url().should("include", "/account/password");
  }); //10

  it("Checking acc-signOut", () => {
    cy.get("#account-menu").click();
    cy.get(".dropdown-item[href='/logout']").click();
    cy.url().should("include", "/logout");
  }); //11
});
