/// <reference types = "cypress"/>

export class LoginPage {

    usernameTextBox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordTextBox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton = '.oxd-button'

    login(username,password){
        cy.get(this.usernameTextBox).type(username)
        cy.get(this.passwordTextBox).type(password)
        cy.get(this.loginButton).click() 
    }

    enterUsername(username){
        cy.get(this.usernameTextBox)
        .type(username)
    
    }

    enterPasword(password){
        cy.get(this.passwordTextBox)
        .type(password)

    }

    clickLogin() {
        cy.get(this.loginButton).click()    
    }
}