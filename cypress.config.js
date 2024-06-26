const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // defaultCommandTimeout :3000
      // implement node event listeners here
    },
  },
});
