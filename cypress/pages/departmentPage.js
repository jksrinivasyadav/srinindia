/// <reference types="Cypress"/>

const constants = {
    cred : {
    email : 'selenium1986@gmail.com',
    pass : 'Selenium1986'
    }
}

const goToPage = () => {
    cy.visit('http://automationpractice.com/')
}
const accountLogin = () => {
     cy.get('.login').should('be.visible').click()
}
const womenLink = () => {
    cy.get('.content_scene_cat_bg > .cat_desc').should('be.visible')
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible')
    cy.get('.sf-menu > :nth-child(3) > a').should('be.visible')
}
const topsClick = () => {
    cy.get('#selectProductSort').select('Price: Lowest first')
    cy.get('#subcategories > ul > li:nth-child(1) > h5 > a').click()
    cy.get('#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a').should('be.visible')
    cy.get('.first-in-line > .product-container > .right-block > .content_price > .price').should('be.visible')
    //cy.get('.first-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('not.be.disabled')
    cy.scrollTo('center')
    cy.get('.first-in-line > .product-container > .right-block > .availability > .available-now').should('exist','In stock')
    cy.get('.first-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('not.be.disabled').click()
}

const verifyMess = (message,carts) => {
    cy.get('.layer_cart_product > h2').contains(message)
    cy.get('h2 > .ajax_cart_product_txt_s').contains(carts)
}
const proceedCheckout = () => {
    cy.get('.button-container > .button-medium > span').should('not.be.disabled').should('be.visible').click()
    cy.get('.cart_navigation > .button > span').should('not.be.disabled').click()
    cy.title().should('eq','Login - My Store')
}

const registerEmail = (text,email) => {
    cy.get('#SubmitCreate').should('not.be.disabled').click()
    cy.get('#create_account_error').scrollIntoView().contains(text)
    cy.get('#email_create').type(email)
}

const dressMenuClick = (text,message) => {
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible').click()
    cy.scrollTo('center').get('#layered_category_9').check()
    cy.get('#selectProductSort').select('Price: Highest first').get('#layered_id_attribute_group_15').click()
    cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .availability > .available-now').should('be.visible')
    cy.get('.first-in-line.last-line > .product-container > .right-block > .button-container > .lnk_view > span').should('be.visible').click()
    checkTit(message)
}

const checkTit = (message) => {
    cy.title().should('eq',message)
}

const addItem = (name,price) => {
    cy.contains(name)
    cy.get('#our_price_display').contains(price)
    cy.get('#bigpic').should('be.visible')            
    cy.get('.exclusive > span').should('be.visible')
    cy.get('.icon-plus').click()
    cy.get('#quantity_wanted').should('have.value','2')
    cy.get('#group_1').select('M')
    cy.get('#group_1').should('have.value','2')
    //cy.get("div.columns-container").click().should('have.value','M')
}
const addToCart = () => {
    cy.get('.exclusive > span').should('not.be.disabled').click()
}
const cartProductText = (message) => {
    checkTit(message)
    cy.get('.button-medium > span').should('be.visible').click()
}
const tshirtsMenu = () => {
    cy.get('.sf-menu > :nth-child(3) > a').should('be.visible').click()

}
const sortBy = (sorting) => {
    cy.get('#selectProductSort').scrollIntoView().select(sorting)
}
const selectSizes = (small,medium,large) => {
    cy.get('.cat-name').should('contain.text','T-shirts')
   // sortBy(sorting)
    if(small){
    cy.get('#layered_id_attribute_group_1').check().should('be.checked')
    }
    if(medium){
        cy.get('#layered_id_attribute_group_2').check().should('be.checked')
    }
    if (large) {
        cy.get('#layered_id_attribute_group_3').check().should('be.checked')
     }
   }
  const specialDress = (title) => {
        tshirtsMenu()
        cy.get('#special_block_right > .block_content > :nth-child(2) > .btn > span').scrollIntoView().click()
        cy.get('.page-heading').should('contain.text',title)
   }
   const specialDiscount = (price) => {
       cy.get('.first-in-line > .product-container > .right-block > .content_price > .price-percent-reduction').scrollIntoView().should('contain.text',price)
  }
  const addToWishlistAndCompare = (wishList) => {
      if(wishList){
          cy.get('.first-in-line > .product-container > .functional-buttons > .wishlist > .addToWishlist').should('be.visible').click()
          cy.get('.fancybox-error').should('contain.text','You must be logged in to manage your wishlist.')
          cy.get('.fancybox-item').click()
      }
     // if(compare) {
      //    cy.get('.first-in-line > .product-container > .functional-buttons > .compare > .add_to_compare').should('be.visible').click()
    //      //cy.get('.add_to_compare').should('be.visible').click()        
    //  }     
  }
  const comparing = (compare,number) => {
    if(compare) {
        cy.get('.first-in-line > .product-container > .functional-buttons > .compare > .add_to_compare').should('be.visible').click()
        cy.get('#center_column > div:nth-child(5) > div > form > button > span').click()
        cy.get('.page-heading').should('be.visible')
        verifyDeleteIcon()
        clickViewLink()
        incrementQuantity(number)
        addToCart()
  }
}
 const verifyDeleteIcon = () => {
     cy.get('.icon-trash').should('be.visible')
 }
 const clickViewLink = () => {
     cy.get('.button-container > .lnk_view > span').click()
 }
 const incrementQuantity = (number) => {
    for(let i=1;i<10;i++){
    cy.get('.button-plus > span').click()
    }
     cy.get('#quantity_wanted').should('have.value',number)    
 }
 const verifyQuantity = (number) => {
     return cy
     .get('span.ajax_cart_quantity').should('have.value',number)
 }
 const loginBttn = () => {
     return cy
     .get('#SubmitLogin > span').scrollIntoView()
     .get('#SubmitCreate > span')
 }
 const topSearch = () => {
     cy.get('#search_query_top').type('Bras {enter}')
     cy.get('#center_column > p').contains('No results were found for your search')
     cy.get('#search_query_top').clear().type('Blouse {enter}')
     cy.get('.right-block > h5 > .product-name').scrollIntoView().should('be.visible').click()
     
 }
 const clickImage = () => {
     cy.get('#bigpic').should('be.visible').click()
     cy.get('.fancybox-image').click().get('.fancybox-item').click()

 }
 const shareProductOnExternalSite = () => {
     cy.get('.btn-twitter').should('be.visible').get('#send_friend_button').click()
     cy.get('.fancybox-item').should('be.visible').click()
 }
 const contactDetails = () => {
     return cy
     .get('#contact-link > a').click()
 }
 const enterCustomerDetails = (email) => {
     cy.get('#id_contact').scrollIntoView().should('be.visible').select('Customer service')
     cy.get('#email').type(email).get('#id_order').type('ch30001')
     cy.get('#message').type('this is my message')
     cy.get('#submitMessage > span').click()
 }
 const verifyBannerMess = () => {
     return cy
     .get('.alert')
 }
 const enterEmailAndPassword = (mymail,mypass) => {
     cy.get('#email').type(mymail)
     cy.get('#passwd').type(mypass)
     cy.get('#SubmitLogin > span').click()
     if (cy.get('#center_column > :nth-child(2)').contains('There is 1 error Authentication failed.')) {   
     }
 }
 const savingLink = () => {
     cy.get('.row > a > .img-responsive').should('be.visible').click()
 }
 const verifyStores = () => {
     cy.get('#stores_block_left > .block_content > div > .btn > span').click()
 }

const deptPages = {
    goToPage:goToPage,
    accountLogin:accountLogin,
    womenLink:womenLink,
    topsClick:topsClick,
    verifyMess:verifyMess,
    proceedCheckout:proceedCheckout,
    registerEmail:registerEmail,
    dressMenuClick:dressMenuClick,
    checkTit:checkTit,
    addItem:addItem,
    addToCart:addToCart,
    cartProductText:cartProductText,
    tshirtsMenu:tshirtsMenu,
    selectSizes:selectSizes,
    sortBy:sortBy,
    specialDress:specialDress,
    specialDiscount:specialDiscount,
    addToWishlistAndCompare:addToWishlistAndCompare,
    comparing:comparing,
    verifyDeleteIcon:verifyDeleteIcon,
    clickViewLink:clickViewLink,
    incrementQuantity:incrementQuantity,
    verifyQuantity:verifyQuantity,
    loginBttn:loginBttn,
    topSearch:topSearch,
    clickImage:clickImage,
    shareProductOnExternalSite:shareProductOnExternalSite,
    contactDetails:contactDetails,
    enterCustomerDetails:enterCustomerDetails,
    verifyBannerMess:verifyBannerMess,
    enterEmailAndPassword:enterEmailAndPassword,
    savingLink:savingLink,
    verifyStores:verifyStores


}
export default {
    deptPages,constants
}