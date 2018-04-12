// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("coinsList", ()=> { 
  cy.visit('http://localhost:3000/admin');
  cy.contains('Coins').click();
  cy.contains('List of all Coins');
  if (cy.get('ul > li') != null) {
    cy.get('.coin-remove').first().click();
  } else {
    cy.get('input[name="name"]').type('Bitcoin');
    cy.get('input[value="Submit"]').click();
  }

  // if(cy.get('ul').children()!== )
  cy.location('href').should('eq', 'http://localhost:3000/admin/coins');
  cy.get('input[name="name"]').type('ethereum');
  cy.get('input[value="Submit"]').click();
  cy.get('input[name="name"]').type('Bitcoin');
  cy.get('input[value="Submit"]').click();
});
Cypress.Commands.add("merchantsPage",()=>{
  cy.visit('http://localhost:3000/admin');
  // cy.contains('Username');
  cy.contains('Merchants').click();
  // cy.url().should('eq', 'http://localhost:3000/admin/merchants')
  cy.contains('List of Merchants');
  cy.get('ul').children();
});
Cypress.Commands.add('iframe', $iframe => {
  return new Cypress.Promise(resolve => {
    $iframe.on('load', () => {
      resolve($iframe.contents().find('body'));
    });
  });
});
Cypress.Commands.add("signup", (name, password) => {
  cy.visit('http://localhost:3600');
  cy.contains('Signup').click();
  cy.get('form').within(($form) => {
    cy.get('input[type="email"]').type(name);
    cy.get('#password-input').type(password);
    cy.get('#confirm-password-input').type(password);
    cy.root().submit();
  });
}),
  Cypress.Commands.add("createCoupon", (value) => {
    cy.get('input[type="number"]').type(value);
    cy.contains('Create Coupon').click();
    cy.contains('Coupon has been created');
  }),
Cypress.Commands.add("login", (username, password) => {
  cy.visit('http://localhost:3600');
  cy.url().should('eq', 'http://localhost:3600/login')
  cy.get('form').within(($form) => {
          cy.get('input[type="email"]').type(username);
          cy.get('input[type="password"]').type(password);
          cy.contains('Login').click();
  });
 
})