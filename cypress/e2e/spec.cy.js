/* eslint-disable no-undef */
describe('template spec', () => {
  before(() => {
    cy.visit('/');
  });

  it('check theme switcher', () => {
    cy.get('[data-testid=search]').type('wonderful');
  });
});
