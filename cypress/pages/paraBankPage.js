/// <reference types = "Cypress"/>

const goToBankSite = () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
}

const verifyTitle = (text) => {
    cy.title().should('eq',text)
}

const bank = {
    goToBankSite : goToBankSite,
    verifyTitle : verifyTitle
}

export default {
    bank
}