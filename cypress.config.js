const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      on('before:run', async (details) => { // for reporter
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => { // for reporter
        console.log('override after:run');
        await afterRunHook();
      });

    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
});