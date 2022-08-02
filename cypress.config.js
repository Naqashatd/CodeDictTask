const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
 
  e2e: {
    baseUrl: 'https://www.calculator.net/discount-calculator.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
