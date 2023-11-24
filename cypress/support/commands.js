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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('actionClick', (element) => {
    cy.get(element).click()
  });
  
  Cypress.Commands.add('actionClickForce', (element) => {
    // eslint-disable-next-line cypress/no-force
    cy.get(element).click({  force:true })
  });
  
  Cypress.Commands.add('actionClickEq', (eq, element) => {
    cy.get(element).eq(eq).click();
  });
  
  Cypress.Commands.add('actionClickText', (text) => {
    cy.contains(text).click()
  });
  
  Cypress.Commands.add('actionClickTextForce', (text) => {
    // eslint-disable-next-line cypress/no-force
    cy.contains(text).click({ force:true })
  })