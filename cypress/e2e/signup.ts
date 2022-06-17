/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate';

describe('SignUp', () => {
  it('should sign up correctly', () => {
    const user = createUser();

    cy.visit('/register');

    cy.signUp(user);

    cy.wait(3000);

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should sign up incorrectly', () => {
    cy.visit('/register');

    cy.findByRole('button', { name: /cadastrar/i }).click();

    cy.findByText('Nome obrigatório!').should('exist');
    cy.findByText('E-mail obrigatório!').should('exist');
    cy.findByText('Senha obrigatória!').should('exist');
    cy.findByText('Confirmação de senha é obrigatória').should('exist');
  });
});
