/// <reference types = "Cypress"/>
//import registerPage from ("../../pages/RegisterPage.js");
const RegisterPage = require("../../pages/RegisterPage.js")

context("register login details", () => {
    const regist = new RegisterPage();
    beforeEach(() => {
        regist.navigate();
    })
    it("register my details to login", () => {
         regist.enterPass('Sri','vasu','selenium1986@gmail.com');
    })
})