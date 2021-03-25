/// <reference types = "Cypress"/>
import {addPage} from "../pages/addCompPage"

context("verify user can access site", () => {
    beforeEach(() => {
        addPage.navigateToSite()
        //cy.injectAxe()
        
    })
    it("verify user can navigate to the site", () => {
   // addPage.navigateToSite()
    addPage.verifyTitleAndMessage()
})
})
