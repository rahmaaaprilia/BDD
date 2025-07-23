import TugasSearchPage from './tugassearch.page';
const { Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor');

Given('User akses website homepage Zero Bank', () => {
    TugasSearchPage.visit();
})

When('User melakukan input keyword zero pada search feature', () => {
    TugasSearchPage.fillSearch('zero {enter}');
})

Then('User view pencarian sesuai keyword zero', () => {
    cy.get('h2').should('contain.text', 'Search Results:');
})