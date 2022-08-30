const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
 
  e2e: {
    baseUrl: 'https://react-email-editor-demo.netlify.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  chromeWebSecurity: false,
});
