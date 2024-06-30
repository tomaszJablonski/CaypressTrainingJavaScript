/// <reference types = "cypress"/>

//dzięki tej linicje wyżej nie będą dodawać się niepotrzebne importy
before(function(){
    cy.fixture('rwfile.json').as('testData')
})
//w it nie można używać funkcji strzałkowej ponieważ nie ma 
//ona dostępu do before
it('Read files using Fixture', function() {
    //tutaj szczytujemy plik json który znajduje się w folderze
    //fixture
    cy.fixture('rwfile.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    //tutaj sprawdzamy asercją poszczególny element w json    
    cy.fixture('rwfile').its('name').should('eq','Tomasz')    
    })

    //pobieramy wartość z jsona dzięki funkcji before
    cy.log(this.testData.name)

})


it('Read file using readFile() function', function(){
    cy.readFile('.\\cypress\\fixtures\\rwfile.json').then((data) => {
      cy.log(data.name)
    //asercja implicit  
    cy.readFile('.\\cypress\\fixtures\\rwfile.json').its('name').should('eq','Tomasz')
    })
})

it('Write file', function(){
    // \n przenosi tekst do następnej lini
    cy.writeFile('sample.txt','Hello I am Tomasz \n')
    //ta flaga niżej powoduje, że nie wykasuje się tekst
    //powyżej i będą widoczne obydwa
    cy.writeFile('sample.txt','I am lerning Cypress \n',{flag:'a+'})
    //talk samo można też używać ścieżki zamiast samej
    //nazwy pliku tak samo jak powyżej w readFile
    cy.writeFile('sample.txt','Kocham moją córeczkę Anastazje',{flag:'a+'})

})