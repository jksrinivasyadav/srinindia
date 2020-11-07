///<reference types = 'Cypress'/>

const constants = {
    email:"selenium1986@gmail.com",
    password:"Srini@123",
}
const goToElectronicMenu = (path) => {
    cy.visit('/electronics');
    cy.location('pathname').should('eq',path)
}
const verifyTitle = (title) => {
    cy.title().should('eq',title);
   // cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.category-grid.sub-category-grid > div > div:nth-child(1) > div > div > a > img')
    //.should('be.visible');
}

const verifyURL= (paths) => {
    cy.location('pathname').should('eq',paths)
}
const addCart = () => {
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(1) > div > div.details > div.add-info > div.buttons > input.button-2.product-box-add-to-cart-button').as("cart")

}
const rating = ()=> {
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(3) > div > div.details > div.product-rating-box > div').should('be.visible')
    cy.log('eddy salae')
    addToCompare()
}
 const addToCompare = () => {
     cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(1) > div > div.details > div.add-info > div.buttons > input.button-2.add-to-compare-list-button').as("compare")
     cy.get('@compare').should('be.visible')
     cy.get('@compare').click()
 }

 const addCellPhone = () => {
     cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.category-grid.sub-category-grid > div > div:nth-child(2) > div > h2 > a').as('cell')
     cy.get('@cell').click()     
 }

const menuPage = {
    goToElectronicMenu:goToElectronicMenu,
    verifyTitle:verifyTitle,
    verifyImg:() => cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.category-grid.sub-category-grid > div > div:nth-child(1) > div > h2 > a").as("photo"),
    verifyCellphone: ()  => cy.get("img[title='Show products in category Cell phones']").as("cellphone"),
    verifyOtherProduct: ()  => cy.get("img[title='Show products in category Others']").as("cellphone"),
    verifyText: () => cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(2) > div > div.details > h2 > a').as('text'),
    addCart:addCart,
    verifyURL:verifyURL,
    rating:rating,
    addToCompare:addToCompare,
    successBannerMess:() => cy.get('p.content').as('banner'),
    wishList: () => cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div.master-column-wrapper > div.center-2 > div > div.page-body > div.product-grid > div > div:nth-child(1) > div > div.details > div.add-info > div.buttons > input.button-2.add-to-wishlist-button").click(),
    addCellPhone:addCellPhone
}

export default {
    menuPage,constants
}