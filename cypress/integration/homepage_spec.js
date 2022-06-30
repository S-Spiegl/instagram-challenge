describe("Homepage", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get(".title").should("contain", "Instagram");
  });
});