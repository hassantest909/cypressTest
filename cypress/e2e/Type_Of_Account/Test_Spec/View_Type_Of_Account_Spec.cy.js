/// <reference types="cypress" />

import { ViewTypeOfAccount } from "../Page_Objects/View_Type_Of_Account_Obj"
const viewTypeOfAccount = new ViewTypeOfAccount()

describe("View Type of account detail page",()=>{
    beforeEach(()=>{
        cy.login('text','text')
        cy.visit('http://10.0.1.4/#/')
        viewTypeOfAccount.navigate_to_account_type();
        // viewTypeOfAccount.select_status("Pending")
        // viewTypeOfAccount.click_on_search_button()
        // cy.wait(5000)
    })

    it('Verify Input fields are disabled for account type pending',()=>{
        viewTypeOfAccount.select_status("Pending")
        viewTypeOfAccount.click_on_search_button()
        cy.wait(5000)
        viewTypeOfAccount.navigate_to_view_page(1)
        cy.get('#accountClassificationId').should('have.class','')
        viewTypeOfAccount.verify_input_fields_are_diabled()
        viewTypeOfAccount.verify_dropdown_list_are_disabled()
        viewTypeOfAccount.click_ok_button()
    })

    it('Verify Input fields are disabled for account type approved',()=>{
        viewTypeOfAccount.select_status("Approved")
        viewTypeOfAccount.click_on_search_button()
        cy.wait(5000)
        viewTypeOfAccount.navigate_to_view_page(1)
        viewTypeOfAccount.verify_input_fields_are_diabled()
        viewTypeOfAccount.verify_dropdown_list_are_disabled()
        viewTypeOfAccount.click_ok_button()
    })
})