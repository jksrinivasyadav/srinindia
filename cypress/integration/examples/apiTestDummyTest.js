/// <reference types = "Cypress"/>
import { apiPage } from "../../pages/apiTestDummyPage"

//https://petstore.swagger.io/v2/store/inventory
context('API testing', () => {
    beforeEach(()=> {
        cy.request('http://dummy.restapiexample.com/api/v1/employees').as('resp')
    })
    it('verify status code of get request', () => {
    cy.get('@resp').its('status').should('equal', 200)
})
 context('Verify header response', () => {
     it('api should return json response', () => {
         cy.request({
             method:"GET",
             url:"http://dummy.restapiexample.com/api/v1/employees"
         })
         .its('headers')
         .its('content-type').should('include','application/json')
         //'http://dummy.restapiexample.com/api/v1/create',
         //https://petstore.swagger.io/v2/store/inventory
     })
 })
 context ('post API tests', () => {
     it('Should post record', () => {
         cy.request({
             method:'POST',
             url : 'http://dummy.restapiexample.com/api/v1/create',
             body : {
                "name":"SRI","salary":"000.123","age":"43"
             }
         }).then((response) => {
             expect(response.status).to.eq(200)
             expect(response.body).not.to.be.null
             expect(response.body['status']).to.eq('success')
            // expect(response.body['data :{id}']).to.eq(5689)
             expect(response.body['message']).to.eq('Successfully! Record has been added.')
             expect(response.headers['content-type']).to.eq('application/json')

         })
     })
     context('API Testing get', () => {
         it('Get single user', () => {
             cy.request({
                 method:"GET",
                 url:"http://dummy.restapiexample.com/api/v1/employee/2"
             }).then((response) =>{
                 expect(response.status).to.eq(200)
                 expect(response.body['status']).to.eq('success')
             })
         })
     })
     context('API Testing put', () => {
         it('Check whether put request update the record', () => {
                cy.request({
                    method:"PUT",
                    url: "http://dummy.restapiexample.com/api/v1/update/21",
                    body : {
                        "name":"FALTU","salary":"000.123","age":"43"  
                    }
                }).then((response) => {
                 expect(response.status).to.be.ok
                 expect(response.body).not.to.be.null
                 expect(response.headers['content-type']).to.eq('application/json')
                 expect(response.body['message']).to.eq('Successfully! Record has been updated.')
                 expect(response.status).to.eq(200)
             })
         
            })
        })
        context.only('Single user', () => {
            it('Get request for single user', () => {
                cy.request({
                    method: "GET",
                    url: "http://dummy.restapiexample.com/api/v1/employee/2"
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.data.employee_name).to.eq('Garrett Winters')
                    expect(response.body.data.employee_salary).to.eq(170750)
                    expect(response.body.data.employee_age).to.eq(63)
                })
            })
        })
     })
 })
