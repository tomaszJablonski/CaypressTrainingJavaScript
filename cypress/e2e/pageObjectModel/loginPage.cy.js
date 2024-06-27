export class LoginPage {

    usernameTextBox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordTextBox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton = '.oxd-button'

    login(username,password){
        cy.get(usernameTextBox).type(username)
        cy.get(passwordTextBox).type(password)
        cy.get(loginButton).click() 
    }

    // enterUsername(username){
    //     cy.get(usernameTextBox)
    //     .type(username)
    
    // }

    // enterPasword(password){
    //     cy.get(passwordTextBox)
    //     .type(password)

    // }

    // clickLogin() {
    //     cy.get(this.loginButton).click()    
    // }
}