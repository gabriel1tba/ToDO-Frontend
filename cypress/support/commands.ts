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
import { Todo } from './generate';

type TodoList = {
  btnTitle: string | RegExp;
  todos: Todo[];
};

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/nome/i).type(user.username);
  cy.findByPlaceholderText(/e-mail/i).type(user.email);
  cy.findByPlaceholderText(/^senha/i).type(user.password);
  cy.findByPlaceholderText(/confirme a senha/i).type(user.password);

  cy.findByRole('button', { name: /cadastrar/i }).click();
});

Cypress.Commands.add('signIn', () => {
  cy.findByPlaceholderText(/e-mail/i).type(Cypress.env('cyEmail'));
  cy.findByPlaceholderText(/^senha/i).type(Cypress.env('cyPassword'));

  cy.findByRole('button', { name: /entrar/i }).click();
});

Cypress.Commands.add('createTodos', (todoList: TodoList) => {
  todoList.todos.forEach((todo, index) => {
    if (index === 0) {
      cy.findByRole('button', {
        name: /adicione sua primeira tarefa/i,
      }).click();

      cy.findByLabelText(/título/i).type(todo.title);
      cy.findByLabelText(/descrição/i).type(todo?.description);

      cy.findByRole('button', { name: todoList.btnTitle }).click();

      return;
    }

    cy.findByRole('button', { name: /adicionar tarefa/i }).click();

    cy.findByLabelText(/título/i).type(todo.title);
    cy.findByLabelText(/descrição/i).type(todo?.description);

    cy.findByRole('button', { name: todoList.btnTitle }).click();
  });
});
