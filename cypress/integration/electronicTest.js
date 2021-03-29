/*
/// <reference types ='Cypress'/>
import {menuPage,constants} from "../pages/electronicPage.js"
context('electronic menu', () => {
    beforeEach(() => {
      //  cy.exec('npm run db:reset && npm run db:seed')
      cy.viewport('iphone-8')
        menuPage.goToElectronicMenu('/electronics');
        menuPage
        
    })
    it('nav to the electronic menu',() => {
        menuPage.verifyTitle('nopCommerce demo store. Electronics')
       // menuPage.verifyImg().should('be.visible');
      // cy.pause()
        menuPage.verifyImg().should("be.visible","Camera & photo")
        menuPage.verifyCellphone().should('be.visible')
        menuPage.verifyOtherProduct().should('be.visible').click();
        cy.log('srini')
        menuPage.verifyURL('/others')
        menuPage.rating();
        menuPage.successBannerMess().should('have.text','The product has been added to your product comparison')
        menuPage.wishList()
        .should('not.have', 'The product has been added to your wishlist')
    })
    it('adding to the cart', ()=> {
        menuPage.addCellPhone()
        menuPage.verifyURL('/cell-phones')
        menuPage.verifyText(
        ).should('have.text','HTC One Mini Blue')
        //menuPage.successBannerMess().should('have.text','The product has been added to your shopping cart')
    })
    afterEach(() => {
        cy.clearCookies()
    })
})
*/