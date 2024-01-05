const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "avar5b",
  e2e: {
    baseUrl: 'https://sqlverifier-staging-08050d656f7a.herokuapp.com',
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
  env: {
    testBaseUrl: 'https://example.cypress.io',
    accessToken: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwNzA3MDYwMCwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MDQ0Nzg2MDB9.tyv7QpGG8G46qfD1o_jHUrD8fyBPeWo2L2XC-eU_53Pi2jfdY6Gys2raiD9Cf6g-y9TDikrETSFaSyC-mAajQg"
  },
  watchForFileChanges: false
});
