/// <reference types="cypress" />

it('automationstepbystep site', () =>{
    cy.visit('https://www.google.pl/')
    cy.get('#L2AGLb > .QS5gu').click();
    // cy.get('#APjFqb').type("Automation Step by Step").type('{enter}')
    //albo tak jak poniżej lekko srócony zapis
    cy.get('#APjFqb').type("Automation Step by Step{enter}")
    /* cy.get('.className, {timeout:5000}').type('123 {enter}') 
    - możemy ustawić większe czekanie ręcznie lub w pliku cypress.config.js dla wszystkich zwiększyć.
    To ustawienie tutaj ma większy priorytet niż w configu         
    albo jeszcze tak można 
    cy.wiat(2000)
    */

})