/// <reference path="../support/index.d.ts" />

import { createUser, User } from '../support/generate';

describe('SignUp', () => {
  let user: User;

  beforeEach(() => {
    user = createUser();
  });

  it('should sign up correctly', () => {
    const user = createUser();

    cy.visit('/register');

    cy.signUp(user);

    cy.findByText('Cadastrado com sucesso!').should('exist');
    cy.findByText('Você será redirecionado em instantes...').should('exist');

    cy.wait(3000);

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should sign up with an email that exists and receive an error', () => {
    cy.intercept('POST', '**/user', (res) => {
      res.reply({
        statusCode: 500,
        body: { status: 'error', message: 'Email já cadastrado.' },
      });
    });

    cy.visit('/register');

    cy.signUp(user);

    cy.findByText('Erro ao cadastrar!').should('exist');
    cy.findByText(
      'Um erro inesperado aconteceu... Tente novamente mais tarde.'
    ).should('exist');
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
