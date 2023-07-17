/// <reference types="cypress" />

import { TypeOfAccount } from "../Page_Objects/Type_Of_Account_Obj"
const typeObj = new TypeOfAccount();

describe("Types of account search page", () => {
    beforeEach(() => {
        cy.login('employess@gmail.com', '123456')
        cy.visit('http://10.0.1.4/#/');
        typeObj.navigate_to_typeofaccount_page()
    })

    it("Verify that validation messages are visible when search button is click without providing mandatory fields", () => {
        typeObj.click_on_search_button();
        cy.wait(3000)
        typeObj.verify_success_dialog_isvisible('Select Any One Option')
    })

    it("Verify all fields are selectabe", () => {
        typeObj.select_account_type('INDIVIDUAL')
        typeObj.select_status('Approved')
        typeObj.select_created_by('M Kashif')
        typeObj.select_updated_by('M Kashif')
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.click_on_search_button()
    })

    it("Verify that user should not be able to select from date less than to date", () => {
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-05-01')
        typeObj.click_on_search_button()
        typeObj.verify_validation_message()
    })

    it("Verify that user should not be able to submit form with only from date", () => {
        typeObj.add_date_from('2023-05-01')
        //typeObj.add_date_to('2023-05-01')
        typeObj.click_on_search_button()
        typeObj.verify_validation_message()
    })

    it("Verify that user should not be able to submit form with only to date", () => {
        //typeObj.add_date_from('2023-05-01')
        typeObj.add_date_to('2023-05-01')
        typeObj.click_on_search_button()
        typeObj.verify_validation_message()
    })

    it("Verify that validation message is visible when mandatory feild is selected and search button is clicked", () => {
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        //cy.contains('Search').click()
        //cy.should('contain','Success')
        typeObj.click_on_search_button()
        typeObj.verify_success_dialog_isvisible('Success')
    })

    it("Very that user is able to inactive an account type",()=>{
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.select_status('Approved')
        typeObj.click_on_search_button()
        cy.wait(6000)
        typeObj.select_switch(5)      
        typeObj.verify_dialog_text('This record is already pending for approval','Success')
        //typeObj.verify_success_dialog_isvisible('This record is already pending for approval')
    })

    it("Verify user should not be able to active a pending account type",()=>{
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.select_status('Pending')
        typeObj.click_on_search_button()
        cy.wait(6000)
        //typeObj.select_switch(5)   
        typeObj.check_switch_disable(1)   
        //typeObj.verify_dialog_text('This record is already pending for approval','Success')
        //typeObj.verify_success_dialog_isvisible('This record is already pending for approval')
    })

    it('Test', () => {
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.click_on_search_button()
        //cy.get(':nth-child(3) > :nth-child(5) > .actions > .p-button-primary').click()
        cy.get('.p-datatable-wrapper > .p-datatable-table').contains('td', '2023-07-04').should('be.visible')
        let values = []
        cy.get('.p-datatable-wrapper > .p-datatable-table > tbody > tr')
            .find('td')
            .each(($el, $index) => {
                cy.wrap($el)
                    .invoke('text')
                    .then(text => {
                        if ($index !== 0)
                            values.push(text.trim())
                    })
            })
            //.then(() => expect(values).to.deep.eq(["Value1", "Value2", "Value3"]))
            cy.log(values)
    })

})