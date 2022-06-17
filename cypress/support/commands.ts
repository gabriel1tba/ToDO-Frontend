// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Import Testing Library Commands
import '@testing-library/cypress/add-commands';

import { User } from './generate';

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/nome/i).type(user.username);
  cy.findByPlaceholderText(/e-mail/i).type(user.email);
  cy.findByPlaceholderText(/^senha/i).type(user.password);
  cy.findByPlaceholderText(/confirme a senha/i).type(user.password);

  cy.findByRole('button', { name: /cadastrar/i }).click();

  cy.findByText('Cadastrado com sucesso!').should('exist');
  cy.findByText('Você será redirecionado em instantes...').should('exist');
});

Cypress.Commands.add(
  'signIn',
  (email = 'e2e@cypress.com', password = '123456789') => {
    cy.findByPlaceholderText(/e-mail/i).type(email);
    cy.findByPlaceholderText(/^senha/i).type(password);

    cy.findByRole('button', { name: /entrar/i }).click();
  }
);
