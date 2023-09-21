/* eslint-disable no-undef */
import { defineConfig } from 'cypress';

module.exports = defineConfig({
  // ...rest of the Cypress project config
  projectId: 'a9ejph',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://elite0107.github.io/books-list',
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
  },
});
