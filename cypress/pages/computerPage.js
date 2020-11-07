///<reference types = 'Cypress'/>

const constants = {
    email:"selenium1986@gmail.com",
        company:"xyz@123company.com",
        password:"Srini@123"
}

const compNav = () => {
    cy.visit('/computers');
}

const clickLink = () => {
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.category-grid.sub-category-grid > div > div:nth-child(1) > div > h2 > a').click()
}

const verifyTitle = (title) => {
    cy.title().should('include',title)
}

const clickComp = () => {
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(1) > div > div.details > h2 > a').click();
}

const price = (cart) =>{
    cy.get('#add-to-cart-button-1').as('cart')
    cy.get('@cart').scrollIntoView().should('be.visible')
    cy.get('@cart').should('be.visible',price)  
    cy.get('@cart').click();
    cy.get('#product_attribute_3_6').scrollIntoView().click();
    cy.get('.close').click();
    cy.get('@cart').click()
}
const validationMess = (text) => {
    cy.get('.content').should('have.text',text)
}
const verifyItemsInCart = (title,path) => {
    cy.get('#bar-notification > div > p > a').click();
    verifyTitle(title);
    console.log(title)
    cy.location('pathname').should('eq',path)
}
const checkOut = () => {
    cy.get('#termsofservice').check();
    cy.get('#checkout').click();
}
const checkQuantity = () => {
    cy.get('#topcartlink').then((ele) => {
        Cypress.dom.isVisible(ele)
    })
}
const compPage = {
    compNav:compNav,
    clickLink:clickLink,
    verifyTitle:verifyTitle,
    clickComp:clickComp,
    price:price,
    validationMess:validationMess,
    verifyItemsInCart:verifyItemsInCart,
    checkOut:checkOut,
    checkQuantity:checkQuantity
}

export default {
    compPage, constants
}