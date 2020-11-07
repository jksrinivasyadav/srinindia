/// <reference types = "Cypress"/>



context('Add an item to cart', () => {
    it('Add macbook to the cart', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');
        //Apple MacBook Pro 13-inch
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
        cy.get("#small-search-box-form > .button-1").click();
        cy.scrollTo(0,900);
        cy.wait(5000);
        //newtours.demoaut.com
        http://demo.automationtesting.in/Register.html
        cy.get("input[value='Add to cart']").click();
        cy.get("#add-to-cart-button-4").click();
        //cy.get(".bar-notification success").should('be.visible');
        cy.scrollTo(800,0);
        cy.get('span.cart-label').click()
        cy.get('span.cart-qty').should('be.visible');
        cy.url().should('contain','cart');
        cy.scrollTo(0,800);
        cy.get('#termsofservice').click()
        cy.on('window.alert',(str) => {
            expect(str).to.equal('Please accept the terms of service before the next step')
        }
        )
        cy.get('#termsofservice').check()
        cy.get('#termsofservice').check().should('be.checked');
        cy.get('#checkout').click()
        cy.get('.checkout-as-guest-button').should('be.visible');
        cy.get('.checkout-as-guest-button').click()
        //cy.get('.login-button').should('be.visible')

    });

    });