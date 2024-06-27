import {LoginPage} from "../pageObjectModel/loginPage.cy"

const loginPage = new LoginPage()

it('pom', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // loginPage.enterUsername('Admin')
    // loginPage.enterPasword('admin123')
    // loginPage.clickLogin()    
    loginPage.login('Admin','admin123')
})