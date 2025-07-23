const { Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor');

Given('User akses website homepage Zero Bank', () => {
    cy.visit('http://zero.webappsecurity.com/index.html');
})

When('User melakukan input keyword zero pada search feature', () => {
    cy.get('#searchTerm').type('zero {enter}');
})

Then('User view pencarian sesuai keyword zero', () => {
    cy.get('h2').should('contain.text', 'Search Results:');
})