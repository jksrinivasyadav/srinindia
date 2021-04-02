/// <reference types = "Cypress"/>

const visitPage = () => {
    cy.visit('https://www.quidco.com/')
}

const putRequest = (response) => {
    cy.request({
        method:"PUT",
        url: "http://dummy.restapiexample.com/api/v1/update/21",
        body : {
            "name":"FALTU","salary":"000.123","age":"43"
        }
    }).then ((response) => {
        cy.log(response)
    })
} 
const apiPage = {
    visitPage:visitPage,
    putRequest:putRequest
}
export default {
    apiPage
}