/* eslint-disable no-undef */
describe('template spec', () => {
  it('check theme switcher', () => {
    cy.visit('https://elite0107.github.io/books-list');

    cy.get('[data-testid=search]').type('wonderful');
  });
});
