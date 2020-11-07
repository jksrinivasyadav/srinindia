/// <reference types = "Cypress"/>
context('my first test', () => {
    it('verify title of the page', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');

    })
    it('verify title with different method test', () => {
        cy.contains('nopCommerce demo store')
    });

    it('search for an item and add to basket', () => {
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch").click();
        cy.get("#small-search-box-form > input.button-1.search-box-button").click();
        ///Apple MacBook Pro 13-inch
         cy.scrollTo(0,1000);
        //cy.get("a.product-name").should('be.visible');
        cy.get(".product-box-add-to-cart-button").click();
        cy.wait(5000);
        cy.get("span.cart-label").click();

    })


});