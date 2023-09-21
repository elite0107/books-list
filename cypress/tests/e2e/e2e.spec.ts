describe('e2e test', () => {
  it('should navigate to book detail page when user click read more button', () => {
    cy.intercept({
      method: 'GET',
      url: '/books/v1/volumes*',
      hostname: 'www.googleapis.com',
    }).as('getBooks');

    cy.visit('/');
    cy.wait('@getBooks');

    cy.getBySel('book-list').find('a').first().click();

    cy.location('pathname').should('contain', '/books/');

    cy.contains('To the list page').click();
  });
});
