// load type definitions from Cypress module
/// <reference types="cypress" />

type User = {
  username: string;
  email: string;
  password: string;
};

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to sign up
     * @example cy.signUp(user)
     */
    signUp(user: User): Chainable<Element>;
  }
}
