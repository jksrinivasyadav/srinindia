
class RegisterPage {

    navigate() {
      return cy.visit('/Register.html');
    }

fillForm () {
  cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').type('Sri');
  cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input").type("vasu")
  cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea").type('london');
  cy.get("#eid > input").type('selenium1986@gmail.com');
  cy.get("#basicBootstrapForm > div:nth-child(4) > div > input").type('07738007638');
  cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1) > input').check();
  cy.get('#checkbox1').check();
  cy.get('#msdd').click();  
  cy.get('#basicBootstrapForm > div:nth-child(7) > div > multi-select > div:nth-child(2) > ul > li:nth-child(5) > a').click()
  
} 
 enterPass = (Sri,faltu,email) => {
  cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').type(Sri);
  cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input").type(faltu)
  cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea").type('london');
  cy.get("#eid > input").type(email);
  cy.get("#basicBootstrapForm > div:nth-child(4) > div > input").type('07738007638');
  cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1) > input').check();
  cy.get('#checkbox1').check().should('be.checked')
  cy.get('#msdd').click();
  cy.get('#basicBootstrapForm > div:nth-child(7) > div > multi-select > div:nth-child(2) > ul > li:nth-child(5) > a').click()
  cy.get('#firstpassword').type("MyPASSWORD123");
  cy.get('#Skills').select('Adobe InDesign')
  //cy.get('#select2-country-container').click();
  //#select2-country-container
  cy.get('#basicBootstrapForm').click();
  //#select2-country-results > li:nth-child(4)
  cy.get('#countries').select('Bhutan');
  cy.get('#yearbox').select('1917');
  cy.get('#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select').select('January');
  cy.get('#daybox').select('1');
 }



firstName = () => {
    cy.get("input[ng-model='FirstName']").type(fName);
    cy.get("input[ng-model='LastName']").type(lName);   
}

}

export default RegisterPage;
