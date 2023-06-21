Cypress.Commands.add("visitMySite", () => {
  
  cy.visit("http://localhost:3000/");
});

describe('homepage tests', () => {
  it("should check that 50 island items have been added", () => {
    cy.visitMySite();
    
    cy.get(".island-item")
      .should("have.length", 45);
  });
})