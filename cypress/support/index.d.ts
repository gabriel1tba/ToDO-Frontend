// load type definitions from Cypress module
/// <reference types="cypress" />

type User = {
  username: string;
  email: string;
  password: string;
};

type Todo = {
  title: string;
  description?: string;
};

type TodoList = {
  btnTitle: string | RegExp;
  todos: Todo[];
};

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to sign up
     * @example cy.signUp(user)
     */
    signUp(user: User): Chainable<Element>;

    /**
     * Custom command to sign up
     * @example cy.signIn()
     */
    signIn(email?: string, password?: string): Chainable<Element>;

    /**
     * Custom command to sign up
     * @example cy.createTodos(todoList)
     */
    createTodos(todoList: TodoList): Chainable<Element>;
  }
}
