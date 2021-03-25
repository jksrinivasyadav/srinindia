/// <reference types = "Cypress" />


const navigateToSite = () => {
    cy.visit('https://demo.nopcommerce.com/')
}
const verifyTitleAndMessage = () => {
    cy.title().should('eq', 'nopCommerce demo store')
    searchBox()
}
const searchBox = () => {
    return cy
    .get('#small-searchterms').should('be.visible')
}

const addPage = {
    navigateToSite:navigateToSite,
    verifyTitleAndMessage:verifyTitleAndMessage,
    searchBox:searchBox
}

export default {
    addPage
}