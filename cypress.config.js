/* eslint-disable no-undef */
import { defineConfig } from 'cypress';

module.exports = defineConfig({
  // ...rest of the Cypress project config
  projectId: 'a9ejph',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/books-list',
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
  },
});
