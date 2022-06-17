/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate';

describe('SignUp', () => {
  it('shold sign up', () => {
    const user = createUser();

    cy.visit('/register');

    cy.findByPlaceholderText(/nome/i).type(user.username);
    cy.findByPlaceholderText(/e-mail/i).type(user.email);
    cy.findByPlaceholderText(/^senha/i).type(user.password);
    cy.findByPlaceholderText(/confirme a senha/i).type(user.password);

    cy.findByRole('button', { name: /cadastrar/i }).click();

    cy.findByText('Cadastrado com sucesso!').should('exist');
    cy.findByText('Você será redirecionado em instantes...').should('exist');

    cy.wait(3000);

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
