/// <reference types = "Cypress"/>

const constants = {
    email:"selenium1986@gmail.com",
        company:"xyz@123company.com",
        password:"Srini@123"
}

const visitPage = () => {
    cy.visit('/jewelry');
}

const checkTitle = (title) => {
    cy.title().should('eq',title)
}
const checkElement = (text) => {
   // if(Cypress.$(text).length > 0) {
    cy.contains(text)
   // } else {
      //  cy.get('#bar-notification > div > p > a').click()
    }
//}

const addItemToCart = (text) => {
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(2) > div > div.details > div.add-info > div.buttons > input.button-2.product-box-add-to-cart-button').click()
    checkElement(text)
    //cy.get('#bar-notification > div > p').as('notification')
    cy.scrollTo('top')
}

const clickShoppingCart = () => {
   // cy.get('#topcartlink > a > span.cart-qty').should('eq','1')
   // cy.get('#topcartlink > a > span.cart-label').click()
}
 const addVintageItem = (text) => {
     cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(3) > div > div.details > div.add-info > div.buttons > input.button-2.product-box-add-to-cart-button').click()
     checkElement(text)
    // cy.get('#bar-notification > div > p').as('notification')
     cy.scrollTo('top')
 }

const jewPage = {
    checkTitle:checkTitle,
    visitPage:visitPage,
    checkElement:checkElement,
    addItemToCart:addItemToCart,
    clickShoppingCart:clickShoppingCart,
    addVintageItem:addVintageItem
}

export default {
    jewPage,constants
};