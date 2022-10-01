/// <reference path="../support/index.d.ts" />

import { createTodoList } from '../support/generate';

const todoList = {
  todos: createTodoList(5),
};

const editList = createTodoList(5);

describe('Dashboard', () => {
  it('should create five items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findByText(/tarefas criadas/i).should('exist');
    cy.findByLabelText('0').should('exist');

    cy.createTodos(todoList);

    cy.findByText(/tarefas criadas/i).should('exist');
    cy.findByLabelText('5').should('exist');
  });

  it('should check all items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findByText('Tarefas criadas').should('exist');
    cy.findByLabelText(String(todoList.todos.length)).should('exist');

    cy.findByText('Concluídas').should('exist');
    cy.findByLabelText(`0 de ${todoList.todos.length}`).should('exist');

    cy.findAllByRole('checkbox').each((checkbox) => {
      cy.wrap(checkbox).check();
    });

    cy.findByText('Concluídas').should('exist');
    cy.findByLabelText(`5 de ${todoList.todos.length}`).should('exist');
  });

  it('should edit all items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findAllByTestId('edit-todo').each((btn, index) => {
      cy.wrap(btn).click();

      cy.findByLabelText(/título/i)
        .clear()
        .type(editList[index].title);
      cy.findByLabelText(/descrição/i)
        .clear()
        .type(editList[index]?.description);

      cy.findByRole('button', { name: /salvar/i }).click();
    });
  });

  it('should delete all items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findByText('Tarefas criadas').should('exist');
    cy.findByLabelText(String(todoList.todos.length)).should('exist');

    cy.findAllByTestId('delete-todo').each((btn) => {
      cy.wrap(btn).click();

      cy.findByRole('button', { name: /sim, excluir/i }).click();
    });

    cy.findByText('Tarefas criadas').should('exist');
    cy.findByLabelText('0').should('exist');
  });
});
