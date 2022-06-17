/// <reference path="../support/index.d.ts" />

describe('SignUp', () => {
  it('should sign in correctly and out', () => {
    cy.visit('/');

    cy.signIn();

    cy.url().should('eq', `${Cypress.config().baseUrl}/dashboard`);

    cy.findByTestId('sign-out').click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should sign in incorrectly', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /entrar/i }).click();

    cy.findByText('E-mail obrigatório!').should('exist');
    cy.findByText('Senha obrigatória!').should('exist');
  });
});
