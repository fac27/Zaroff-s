Cypress.Commands.add("visitMySite", relativePath => {
  cy.visit(`http://localhost:3000/${relativePath}`);
});

describe("end to end flow", () => {
  it("should check that 45 island items have been added", () => {
    cy.visitMySite("");

    cy.get(".island-item").should("have.length", 45);
  });

  it("should navigate to the relevant dynamic path", () => {
    cy.visitMySite("");
    cy.contains("Sunset").click();

    cy.url().should("include", "/sunset-haven");
  });

  it("should check that clicking Add to Basket adds an item to the basket correctly", () => {
    cy.visitMySite("/island/sunset-haven");
    cy.contains("Add to Basket").click();
  });

  it("should add the island to the basket in local storage when Add to Basket is clicked", () => {
    cy.visitMySite("/island/sunset-haven");
    cy.contains("Add to Basket").click();
    cy.window().then(win => {
      const value = win.localStorage.getItem("basket");
      expect(value).to.contain("Sunset Haven");
    });
  });

  it("should render a basket item to the basket page", () => {
    cy.visitMySite("/island/sunset-haven");
    cy.contains("Add to Basket").click();
    cy.visitMySite("/basket");
    cy.contains("Sunset Haven");
  });

  it("should delete an item from being rendered in the basket when delete button is clicked", () => {
    cy.visitMySite("/island/sunset-haven");
    cy.contains("Add to Basket").click();
    cy.visitMySite("/basket");
    cy.contains("⌫").click();
    cy.contains("Sunset Haven").should("not.exist");
  });

  it("should delete an item from local storage when button is clicked", () => {
    cy.visitMySite("/island/sunset-haven");
    cy.contains("Add to Basket")
    .click();
    cy.visitMySite("/basket");
    cy.contains("⌫")
    .click();
    cy.window().then((win) => {
      const value = win.localStorage.getItem("basket");
      expect(value).not.to.contain("Sunset Haven");
    });
  })
});
