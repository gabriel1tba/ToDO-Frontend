/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it.skip('should visit google', () => {
    cy.google();
  });

  it('should visit won games', () => {
    cy.visit('https://willianjusten.com.br');

    cy.findByTitle(/mudar o tema/i).click();
    cy.get('.light').should('exist');

    cy.findByTitle(/mudar o tema/i).click();
    cy.get('.dark').should('exist');
  });
});
