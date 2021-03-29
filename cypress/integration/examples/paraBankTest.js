/// <reference types = "Cypress"/>
import {bank} from "../../pages/paraBankPage"

context('Parabank site access', () => {
    beforeEach(() => {
        bank.goToBankSite()
    })
    it('check title of the page', () => {
        bank.verifyTitle('ParaBank | Welcome | Online Banking')
    })
})