describe('Página de inicio', () => {
  it('Cargar la página principal', () => {
    cy.visit('localhost:8000');
    cy.contains('NINTOPIC').should('exist');
  });

  it('La página de inicio tiene visible la barra de navegación', () => {
    cy.visit('localhost:8000/news/animal-crossing');
    cy.get('Nav').should('be.visible');
  });
});

describe('Páginas de noticias', () => {
  it('Los enlaces de las páginas de noticias funcionan', () => {
    const pages = ['news/animal-crossing', 'news/super-mario', 'news/the-legend-of-zelda'];

    pages.forEach((page) => {
      cy.visit(`localhost:8000/${page}`);
      cy.get('.link').each(($link) => {
        cy.wrap($link)
          .should('have.attr', 'href')
          .and('not.be.empty');
      });
    });
  });
});