/// <reference types = "cypress"/>
/// <reference types="cypress-downloadfile"/>

it('File Upload Test',function(){
    cy.visit('https://trytestingthis.netlify.app/')
    //załadowanie pliku Wybierz plik z widnowsa
    //albo z projektu 
    cy.get('#myfile').attachFile('240059_morze_plaza_lato.jpg')

})

it('File Download test', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','wikipedia.jpg')

})

