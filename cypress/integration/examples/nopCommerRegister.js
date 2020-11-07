///<reference types ='Cypress'/>
import { page,constants } from "../../pages/nopCommerRegisterPage";

context('register to access nopcommer site', () => {
    beforeEach(() => {
        page.visit();
    })
    it('register nopCommer website', () => {
        page.clickLinkReg();
        page.fillForm(constants.details.firstName,constants.details.lastName,'selenium1986@gail.com','srini@xyzcomp.com','srini123','srini123');
        page.verifyElment("The specified email already exists");
        //page.verifyElement();
    })
})
