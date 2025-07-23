const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH = '#searchTerm';

class TugasSearchPage {
    static visit() {
        cy.visit(URL);
    }

    static fillSearch() {
        cy.get(SEARCH).type('zero {enter}');
    }
}

export default TugasSearchPage;