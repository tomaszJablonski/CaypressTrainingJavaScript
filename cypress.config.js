const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mfsg7o",
  e2e: {
    setupNodeEvents(on, config) {
      // defaultCommandTimeout :3000 - to jest globalny time out
      // watchForFileChanges : false - jak to ustawimy to znaczy, że 
      //nie chcemy aby cypress automatycznie uruchamiał 
      //test po poprawkach tylko musimy to zrobić ręcznie
      // implement node event listeners here
      video : true
      trashAssetsBeforeRuns : true
    },
  },
  record: true, // dodaj ustawienie rekordowania
    key: 'your-record-key' // dodaj klucz rekordowania
});