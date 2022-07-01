//remember to run npx cypress open before running the tests
//also, use "cypress": "^9.7.0". I don't know why but the later version
//I couldn't set up...

//make changes to the cypress config (e.g. get rid of the videos) 
//using the cypress.json file. Check the state of things using npx 
//cypress open

//run a specific test using: 
//npm run test:integration -- --spec "cypress/integration/<name of test>.js"
//e.g.
//npm run test:integration -- --spec "cypress/integration/user_can_submit_posts_spec.js"
//doesn't seem to work... take out on of the --?

describe("Authentication", () => {
  it("signs in a user and redirects them to their profile page", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#name").type("Bob");
    cy.get("#email").type("bob@fake.com");
    cy.get("#password").type("guest");
    cy.get("#submit").click();

    // sign in
    cy.get("#email").type("bob@fake.com");
    cy.get("#password").type("guest");
    cy.get("#submit").click();

    cy.url().should("include", "/profile");
    cy.contains("Hello, Bob Belcher!");
  });
});