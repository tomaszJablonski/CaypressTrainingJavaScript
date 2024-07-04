const cypress = require("cypress");
const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

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
      on('task', {downloadFile})
    },
  },
  record: true, // dodaj ustawienie rekordowania
  key: '5ba6d829-0deb-4a8a-aa09-e42d7073c293', // dodaj klucz rekordowania
  "reporter":"mochawesome",
  "reporterOptions":{
    "charts": true,
    "overwrite": false,
    "html": false,
    "json":true,
    "reportDir": "cypress/report/mochawesome-report"
  }
});