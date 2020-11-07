///<reference types = 'Cypress'/>

const constants = {
    details: {
        firstName:"Srini",
        lastName:"vasu",
        email:"selenium1986@gmail.com",
        company:"xyz@123company.com",
        password:"Srini@123",
        confirmPassword:"Srini@123"
    }
}
const visit = () => {
    cy.visit('https://demo.nopcommerce.com/');
}

const clickLinkReg = () => {
    cy.get('a.ico-register').click();
}

const verifyElment = (message) => {
    cy.get('.message-error > ul > li').as("validation")
   // .should('have.text',message);
    cy.get('@validation').should('have.text',message);
}

const fillForm = (first,last,email,company,passwd,confpass) => {
    cy.get('#gender-male').check();
    cy.get('#FirstName').type(first)
    cy.get('#LastName').type(last)
    cy.get("[name='DateOfBirthDay']").select('1')
    cy.get("[name='DateOfBirthMonth']").select('May')
    cy.get("[name='DateOfBirthYear']").select('1948');
    cy.get('#Email').type(email);
    cy.get('#Company').type(company)
    cy.get('#Password').type(passwd)
    cy.get('#ConfirmPassword').type(confpass)
    cy.get('#register-button').click();  
}

const page = {
    visit: visit,
    clickLinkReg:clickLinkReg,
    fillForm: fillForm,
    verifyElment:verifyElment
}

export default {
    page,constants
};