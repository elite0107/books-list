declare namespace Cypress {
  interface Chainable {
    getBySel(dataTestAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
    state(state: string): any;
    requestsCount(request: string): Chainable<JQuery<number>>;
  }
}
