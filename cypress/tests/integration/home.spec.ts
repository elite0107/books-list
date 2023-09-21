import { BOOKS_PER_PAGE, DEBOUNCING_TIME } from '../../../src/config';

describe('Homepage test', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/books/v1/volumes*',
      hostname: 'www.googleapis.com',
    }).as('getBooks');

    cy.visit('/');
    cy.wait('@getBooks');
  });

  it('should render homepage correctly and render first items', () => {
    let start = 0,
      end = 0;

    cy.getBySel('pagination-numbers')
      .find('span')
      .should((spans) => {
        expect(spans).to.have.length(3);

        start = parseInt(spans[0].innerHTML);
        end = parseInt(spans[1].innerHTML);
      });

    cy.getBySel('book-list').should((bookList) => {
      expect(bookList.children()).to.have.length(end - start + 1);
    });

    cy.getBySel('prev').should('be.disabled');
    cy.getBySel('next').should('not.be.disabled');
  });

  it('navigate pages and check pagination values', () => {
    let start = 0,
      end = 0;

    cy.getBySel('pagination-numbers')
      .find('span')
      .should((spans) => {
        expect(spans).to.have.length(3);

        start = parseInt(spans[0].innerHTML);
        end = parseInt(spans[1].innerHTML);
      });

    cy.getBySel('next').click();

    cy.wait('@getBooks');

    cy.getBySel('pagination-numbers')
      .find('span')
      .should((spans) => {
        expect(spans).to.have.length(3);

        expect(parseInt(spans[0].innerHTML)).to.equal(start + BOOKS_PER_PAGE);
        expect(parseInt(spans[1].innerHTML)).to.equal(end + BOOKS_PER_PAGE);
      });

    cy.getBySel('prev').should('not.be.disabled');
    cy.getBySel('next').should('not.be.disabled');
  });

  it('should not make http request in debouncing time', () => {
    cy.getBySel('search').type('wonderful');
    cy.get('@getBooks.all').should('have.length', 1);

    cy.getBySel('search').type('great');
    cy.get('@getBooks.all').should('have.length', 1);

    cy.wait(DEBOUNCING_TIME);
    cy.get('@getBooks.all').should('have.length', 2);
  });
});
