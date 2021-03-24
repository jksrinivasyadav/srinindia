/// <reference types = "Cypress" />


const navigateToSite = () => {
    cy.visit('https://demo.nopcommerce.com/')
}
const verifyTitleAndMessage = () => {
    cy.get('email').click()
}

const goToPage = () => {
    cy.visit('http://automationpractice.com/')
}

const addPage = {
    navigateToSite:navigateToSite,
    verifyTitleAndMessage:verifyTitleAndMessage
}

export default {
    addPage
}