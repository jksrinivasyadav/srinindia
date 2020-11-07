/// <reference types = "Cypress"/>

const navUrl = () => {
    cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
}
const login = (user,pass) => {
    cy.get('#Email').type(user)
    cy.get('#Password').type(pass)
    {
    clickRegister();
    }
} 

const clickRegister = () => {
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > input').click()
}

const verifyMess = () => {
    cy.scrollTo(550,100)
    cy.get(".message-error").as("value");
    console.log('@value');
    cy.get('@value')
    .should("have.text",'Login was unsuccessful. Please correct the errors and try again.No customer account found\n');
}
const constants = {
    login: {
        email:"selenium1986@gmail.com",
        company:"xyz@123company.com",
        password:"Srini@123",
    }
}
const pom = {
    navUrl:navUrl,
    login:login,
    clickRegister:clickRegister,
    verifyMess:verifyMess
}
export default {
    pom,
    constants
};