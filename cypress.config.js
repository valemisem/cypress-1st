const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "avar5b",
  e2e: {
    baseUrl: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com',
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
