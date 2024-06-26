const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // defaultCommandTimeout :3000 - to jest globalny time out
      // watchForFileChanges : false - jak to ustawimy to znaczy, że 
      //nie chcemy aby cypress automatycznie uruchamiał 
      //test po poprawkach tylko musimy to zrobić ręcznie
      // implement node event listeners here
    },
  },
});