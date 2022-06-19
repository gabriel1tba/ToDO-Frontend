/// <reference path="../support/index.d.ts" />

import { createTodoList } from '../support/generate';

const todoList = {
  btnTitle: /salvar/i,
  todos: createTodoList(5),
};

const editList = createTodoList(5);

describe('Dashboard', () => {
  it('should create five items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findByText(/totais 0/i).should('exist');

    cy.createTodos(todoList);

    cy.findByText(/totais 5/i).should('exist');
  });

  it('should view all items', () => {
    cy.visit('/');

    cy.signIn();

    todoList.todos.forEach((todo) => {
      cy.findByText(todo.title).click();
      cy.findByText(todo.description).should('exist');

      cy.findByRole('button', { name: /fechar/i }).click();
    });
  });

  it('should check all items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findByText(`Pendentes ${todoList.todos.length}`).should('exist');
    cy.findByText(/concluídas 0/i).should('exist');

    cy.findAllByRole('checkbox').each((checkbox) => {
      cy.wrap(checkbox).check();
    });

    cy.findByText(`Concluídas ${todoList.todos.length}`).should('exist');
    cy.findByText(/pendentes 0/i).should('exist');
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

      cy.findByRole('button', { name: /salvar alterações/i }).click();
    });
  });

  it('should delete all items', () => {
    cy.visit('/');

    cy.signIn();

    cy.findByText(`Totais ${todoList.todos.length}`).should('exist');

    cy.findAllByTestId('delete-todo').each((btn) => {
      cy.wrap(btn).click();

      cy.findByRole('button', { name: /confirmar exclusão/i }).click();
    });

    cy.findByText(/totais 0/i).should('exist');
  });
});
