/// <reference types = "cypress"/>

it('File Upload Test',function(){
    cy.visit('https://trytestingthis.netlify.app/')
    //załadowanie pliku Wybierz plik z widnowsa
    //albo z projektu 
    cy.get('#myfile').attachFile('240059_morze_plaza_lato.jpg')

})  