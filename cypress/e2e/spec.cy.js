Cypress.Commands.add("visitMySite", (relativePath) => {
  
  cy.visit(`http://localhost:3000/${relativePath}`);
});

describe('homepage tests', () => {
  it("should check that 45 island items have been added", () => {
    cy.visitMySite("");
    
    cy.get(".island-item")
      .should("have.length", 45);
  });
  
  
  it("should navigate to the relevant dynamic path", () => {
    cy.visitMySite("");
    cy.contains("Sunset")
      .click();
    
    cy.url()
      .should("include", "/sunset-haven");
  })

  it("should check that clicking Add to Basket adds an item to the basket correctly", () => {
    cy.visitMySite("/island/sunset-haven");
    cy.contains("Add to Basket")
    .click();

  }
  )

})