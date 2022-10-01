/// <reference path="../support/index.d.ts" />

describe('SignUp', () => {
  it('should sign in correctly and out', () => {
    cy.visit('/');

    cy.signIn();

    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);

    cy.findByTestId('sign-out').click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should sign up with an invalid email and receive an error', () => {
    cy.intercept('POST', '**/auth', (res) => {
      res.reply({
        statusCode: 401,
        body: { status: 'error', message: 'Email ou senha incorretos.' },
      });
    });

    cy.visit('/');

    cy.signIn();

    cy.findByText('Dados não cadastrados!').should('exist');
    cy.findByText('E-mail e/ou senha inválidos.').should('exist');
  });

  it('should sign in incorrectly', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /entrar/i }).click();

    cy.findByText('E-mail obrigatório!').should('exist');
    cy.findByText('Senha obrigatória!').should('exist');
  });
});
