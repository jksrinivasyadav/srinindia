///<reference types ='Cypress'/>
describe('simple route',()=> {
    it('thia will show routes in command log', ()=>{
        cy.server() // enable response stubbing
        cy.route({    
          method:'GET',
          url: '/www.api.twitter.com/tweets/*',
          response:[]
        })
    })
})