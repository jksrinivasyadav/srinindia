/// <reference types ="Cypress"/>

context('Authenticate API', () => {
    it('Get request test', () => {
        cy.request({
            method:"GET",
            url: "https://petstore.swagger.io/v2/store/inventory"
        }).then((response) => {
            expect(response.status).to.eq(200)
           // expect(response.body.pending).to.eq(2)
            expect(response.headers['content-type']).to.eq('application/json')
            expect(response.headers['connection']).to.eq('keep-alive')
        })
    })
     context('passing token', () => {
         it('post request should add record', () => {
             cy.request({
                 method:"POST",
                 url:"https://docket-test.herokuapp.com/api/Todo/",
                 headers : {
                     token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
                 },
                 body : {
                     body : "SINU FALTU PIKUGADU",
                     body : "SINU PICHI SALEGADU"
                 }
             }).then((response) => {
                 expect(response.status).to.eq(200)
                 expect(response.headers['content-type']).to.eq('application/json')
                // expect(response.body).to.eq("SINU FALTU PIKUGADU")
             })
         })

         context('Guru Get request api', () => {
             it('Verify post request', () => {
                 cy.request({
                     method:"GET",
                     url:"https://jsonplaceholder.typicode.com/users"
                 }).then((response) => {
                     expect(response.status).to.eq(200)
                     expect(response.headers['content-type']).to.eq('application/json; charset=utf-8')
                     //expect(response.body).not.to.be.null
                     expect(response.body[0].name).to.eq("Leanne Graham")
                     expect(response.body[0].company.name).to.eq("Romaguera-Crona")
                     expect(response.body[0].address.street).to.eq("Kulas Light")
                     expect(response.body[0].address.city).to.eq("Gwenborough")
                     expect(response.body[0].address.zipcode).to.eq("92998-3874")
                 })
             })
         })
         context('Guru Post request', () => {
             it('Verify post record with guru api', () => {
                 cy.request({
                     method:"POST",
                     url:"https://jsonplaceholder.typicode.com/users",
                     body : {
                            "id": 12,
                            "name": "SRINIVAS FALTU",
                            "username": "YEDDY",
                            "email": "Sincere@april.biz",
                            "address": {
                                "street": "Kulas Light",
                                "suite": "Apt. 556",
                                "city": "Gwenborough",
                                "zipcode": "92998-3874",
                                "geo": {
                                    "lat": "-37.3159",
                                    "lng": "81.1496"
                                }
                            },
                            "phone": "1-770-736-8031 x56442",
                            "website": "hildegard.org",
                            "company": {
                                "name": "PICHAKUNTLA",
                                "catchPhrase": "Multi-layered client-server neural-net",
                                "bs": "harness real-time e-markets"
                        }
                     }
                 }).then((response) => {
                     expect(response.status).to.eq(201)
                     expect(response.headers['content-type']).to.eq('application/json; charset=utf-8')
                     expect(response.body.name).to.eq("SRINIVAS FALTU")
                     expect(response.body.company.name).to.eq("PICHAKUNTLA")
                 })
             })
         })
     })
})