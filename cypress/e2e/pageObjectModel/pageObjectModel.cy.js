import { LoginPage } from "../pageObjectModel/loginPage.cy"

const loginPage = new LoginPage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

//describe - grupowanie testów 
describe('All login tests', function () {

    

    it('login test 1 - valid credentials', function () {
        loginPage.enterUsername('Admin')
        loginPage.enterPasword('admin123')
        loginPage.clickLogin()
        // loginPage.login('Admin','admin123')
        cy.get('.oxd-userdropdown-tab').click()
    })

    it('login test 2 - invalid username', function () {
        loginPage.enterUsername('Admin5')
        loginPage.enterPasword('admin123')
        loginPage.clickLogin()
        // loginPage.login('Admin','admin123')
        cy.get('.oxd-userdropdown-tab').click()
    })
})

it('login test 3 - invalid password', function () {
    loginPage.enterUsername('Admin')
    loginPage.enterPasword('admin456')
    loginPage.clickLogin()
    // loginPage.login('Admin','admin123')
    cy.get('.oxd-userdropdown-tab').click()
})