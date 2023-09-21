describe('e2e test', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/books/v1/volumes*',
      hostname: 'www.googleapis.com',
    }).as('getBooks');
  });

  it('should navigate to book detail page when user click read more button', () => {
    cy.visit('/');
    cy.wait('@getBooks');

    cy.getBySel('book-list').find('a').first().click();

    cy.location('pathname').should('contain', '/books/');

    cy.contains('To the list page').click();
  });

  it('check theme switcher', () => {
    cy.visit('/');
    cy.wait('@getBooks');

    let isDark = false;

    cy.get('html').then((html) => {
      isDark = html.hasClass('dark');
      expect(html.hasClass('dark')).to.eq(true);
      expect(isDark).to.eq(true);
    });

    cy.get('html').then((html) => expect(html.hasClass('dark')).to.eq(isDark));

    cy.get('#theme-toggle').click();
    cy.get('html').then((html) => expect(html.hasClass('dark')).to.eq(!isDark));

    cy.get('#theme-toggle').click();
    cy.get('html').then((html) => expect(html.hasClass('dark')).to.eq(isDark));
  });
});
