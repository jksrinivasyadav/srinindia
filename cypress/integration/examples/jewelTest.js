/// <reference types = "Cypress"/>
import {jewPage,constants} from "../../pages/jewelPage"

describe("verify user can access jewel menu",() =>{

    beforeEach(() =>{
        jewPage.visitPage()
    })

    const addItemToCarts = () => {
       jewPage.checkTitle('nopCommerce demo store. Jewelry')
       jewPage.checkElement('Jewelry')
       jewPage.addItemToCart('The product has been added to your shopping cart');


    }
    it("User should add jewelry item to the basket",()=>{
        addItemToCarts()
        cy.wait(5000)
    })
    it('User should update the shopping cart', ()=> {
        addItemToCarts()
        jewPage.clickShoppingCart()
        jewPage.addVintageItem('The product has been added to your shopping cart')
    })

})