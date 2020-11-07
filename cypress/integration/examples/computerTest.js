/// <reference types = 'Cypress'/>
import {compPage,constants} from "../../pages/computerPage"

context('verify user can access comp menu', ()=> {
    beforeEach(() => {
        compPage.compNav();
    })
    it('Verify user can access computer menu item', ()=>{
        compPage.clickLink()
        compPage.verifyTitle('Desktops');
        compPage.clickComp();
        compPage.price('$1,315.00')
        compPage.validationMess('Please select HDD')
        compPage.validationMess('The product has been added to your shopping cart')
        compPage.verifyTitle('Build your own computer')
        compPage.verifyItemsInCart('Shopping Cart','/cart')
        compPage.checkOut()
        compPage.checkQuantity()
    })
})