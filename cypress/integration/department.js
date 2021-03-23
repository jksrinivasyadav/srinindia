/// <reference types = "Cypress"/>
import {deptPages,constants} from "../pages/departmentPage.js"

describe("verify user can access depts", () => {
beforeEach(() => {
    deptPages.goToPage()
    deptPages.tshirtsMenu()  
    })  
    /*
    it('Verify user can access department stores', () => {
        deptPages.accountLogin()
        deptPages.womenLink()
        deptPages.topsClick()
        deptPages.verifyMess('Product successfully added to your shopping cart','There is 1 item in your cart.')
        deptPages.proceedCheckout()
        deptPages.registerEmail('Invalid email address.',constants.cred.email)
    })
    
    it('verify user can access dress menu link',() => {
        deptPages.dressMenuClick('CASUAL DRESSES','Printed Summer Dress - My Store')
        deptPages.addItem('Printed Summer Dress','$30.50')
        deptPages.addToCart()
        deptPages.cartProductText('Printed Summer Dress - My Store','There is 2 item in your cart.')
    })
    */
    it('verify user can access tshirtsMenu and click on the link', () => {
        //deptPages.tshirtsMenu()
        deptPages.selectSizes('small','Price: Highest first')
        deptPages.sortBy('Price: Highest first')
    })
    it('verify user can access special buy link', () => {
        deptPages.specialDress('Price drop')
        deptPages.specialDiscount('-20%')
        deptPages.addToWishlistAndCompare('wishList')
    })
    it('verify user can compare products',() => {
        deptPages.comparing('compare','10')
        deptPages.verifyMess('Product successfully added to your shopping cart','There are 10 items in your cart.')
        deptPages.proceedCheckout()
        //deptPages.verifyQuantity('10')
        deptPages.loginBttn().should('be.visible')
    })
    it('verify user can search for products and search returns correct results',()=> {
        deptPages.topSearch()
        deptPages.clickImage()
        deptPages.shareProductOnExternalSite()  
    })
    it('Verify user can click on contact link', () => {
        deptPages.contactDetails().should('have.text','Contact us')
        deptPages.enterCustomerDetails('selenium1986@gmail.com')
        deptPages.verifyBannerMess().should('have.text','Your message has been successfully sent to our team.')
    })
    it('verify user can signin or register to access system', () => {
        deptPages.accountLogin()
        deptPages.enterEmailAndPassword('selenium1986@gmail.com','Test123')
        //register is pending
    })
    it('verify user can access saving link',()=> {
        deptPages.savingLink()
    })
})