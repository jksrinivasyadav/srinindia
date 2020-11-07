/// <reference types = 'Cypress'/>
import {pom,constants} from "../../pages/loginPage"

context('Logging in to my app', () => {
    beforeEach(() => {
        pom.navUrl()
    })   
    it('login with valid details', () => {
        pom.login(constants.login.email,constants.login.password);
       // pom.clickRegister();
       // pom.verifyMess();
       pom.verifyMess();

    })
})