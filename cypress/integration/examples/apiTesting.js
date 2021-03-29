/// <reference types = "Cypress"/>

context('Service testing', ()=> {
    it('Verify 200 status code and header validation', () => {
        cy.request("https://jsonplaceholder.typicode.com/posts/").as('res')
        .its('status').should('equal', 200)
        cy.get('@res')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')

    })
    it('verify no data is returned when hitting wrong api', () => {
        cy.request({
            method : 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/test',
            body: {name:'foo'},
            failOnStatusCode: false
        })
        .then(response => {
            expect(response.status).to.be.gt(299)

        })
    })
    it("Create an Employee",()=>{
 
        cy.request({
            method:"POST",
            url:"http://dummy.restapiexample.com/api/v1/create",
            body:{
                "name":"test",
                "salary":"123",
                "age":"23"
            }
        })
        .its('status')
        .should('equal', 200)
        .then((response) => {
            //expect(response.body).has.property('data').has.property("name","test")
            console.log(response);
          })
    })
    it('api should return json response', () => {
        cy.request({
            method:'GET',
            url: 'http://jsonplaceholder.typicode.com/todos'
        })
       // .its('status').should('equal', 200)
        .its('headers')
        .its('content-type').should('include','application/json')
    })
    it('Api should return status code 200', () => {
        cy.request({
            method:'GET',
            url:'http://jsonplaceholder.typicode.com/todos'
        })
        .its('status').should('equal',200)
    })
    describe('User Api', () => {
        beforeEach(() => {
            cy.request('http://jsonplaceholder.typicode.com/users').as('users')
        })
        it('should return the correct status code', () => {
            cy.get('@users').its('status').should('equal', 200)
        })
        it('should return correct number of users', () => {
            cy.get('@users').its('body').should('have.length', 10)
        })
    })
    describe('Todo items', () => {
        it('mark todo items as completed', () => {
            cy.request({
                method: 'PATCH',
                url: 'http://jsonplaceholder.typicode.com/todos/1',
                body : {
                    completed : true,
                }
            })
            .its('body')
            .its('completed')
            .should('be.equal',true)

            })
            it('mark to do as not completed', () => {
                cy.request({
                    method: 'GET',
                    url: 'http://jsonplaceholder.typicode.com/todos/2',
                    body: {
                        completed : true
                    }
                })
                .its('body')
                .its('completed')
                .should('be.equal',false)
            })

        })
        context.only('Docket post test', () => {
            it('should create a todo post', () => {
                cy.request({
                    method: 'POST',
                    url:"https://docket-test.herokuapp.com/api/Todo/",
                    headers : {
                        token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
                    },
                    body: {
                        body : "Cat Walk"
                    }
                })
                .its('status').should('be.ok')
            })
            it('should modify existing todo item', () => {
                cy.request({
                    method:'GET',
                    url:"https://docket-test.herokuapp.com/api/Todo/",
                    headers: {
                    token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
                    },
                    body: {
                        username : "Selenium1986",
                        "Email Address" : "selenium1986@gmail.com",
                        password : "Selenium",
                    },
                })
                .its('status').should('be.ok')
            })
            it('Should delete existng todo item', () => {
                cy.request({
                    method:'DELETE',
                    url:"https://docket-test.herokuapp.com/api/Todo/2",
                    headers : {
                        token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
                    }
                })
                .its('status').should('be.ok')
            })
        })
    })
