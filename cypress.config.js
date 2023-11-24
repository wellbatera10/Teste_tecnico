const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 990,
  viewportWidth: 1330,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {

    
    baseUrl: "https://www.amazon.com.br/",
    setupNodeEvents(on, config) {
      
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    specPattern: 'cypress/e2e',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
  },
});
