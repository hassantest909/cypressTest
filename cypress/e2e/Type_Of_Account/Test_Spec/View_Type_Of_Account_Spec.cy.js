/// <reference types="cypress" />

import { TypeOfAccount } from "../Page_Objects/Type_Of_Account_Obj"
import { ViewTypeOfAccount } from "../Page_Objects/View_Type_Of_Account_Obj"
const typeOfAccount = new TypeOfAccount()
const viewTypeOfAccount = new ViewTypeOfAccount()

describe("View Type of account detail page", () => {
    beforeEach(() => {
        cy.login('text', 'text')
        cy.visit('http://10.0.1.4/#/')
        viewTypeOfAccount.navigate_to_account_type();
        // viewTypeOfAccount.select_status("Pending")
        // viewTypeOfAccount.click_on_search_button()
        // cy.wait(5000)
    })

    it('Verify Input fields are disabled for account type pending', () => {
        viewTypeOfAccount.select_status(1)
        viewTypeOfAccount.click_on_search_button()
        //cy.wait(10000)
        viewTypeOfAccount.navigate_to_view_page(1)
        viewTypeOfAccount.verify_input_fields_are_diabled()
        viewTypeOfAccount.verify_type_of_account_list_is_disabled()
        viewTypeOfAccount.verify_kyc_list_is_disabled()
        viewTypeOfAccount.click_ok_button()
    })

    it('Verify Input fields are disabled for account type approved', () => {
        viewTypeOfAccount.select_status(2)
        viewTypeOfAccount.click_on_search_button()
        //cy.wait(10000)
        viewTypeOfAccount.navigate_to_view_page(1)
        viewTypeOfAccount.verify_input_fields_are_diabled()
        viewTypeOfAccount.verify_type_of_account_list_is_disabled()
        viewTypeOfAccount.verify_kyc_list_is_disabled()
        viewTypeOfAccount.click_ok_button()
    })

    it('Verify that input fields are not null', () => {
        viewTypeOfAccount.select_status(2)
        viewTypeOfAccount.click_on_search_button()
        //cy.wait(10000)
        viewTypeOfAccount.navigate_to_view_page(1)
        viewTypeOfAccount.verify_input_fields_not_empty()
    })

    it('Verify Ok button is working and is navigating user back', () => {
        viewTypeOfAccount.select_status(2)
        viewTypeOfAccount.click_on_search_button()
        //scy.wait(10000)
        //cy.get('._loading_overlay_content').waitUntilNotVisible()
        //cy.get('._loading_overlay_content').should('not.exist')
        viewTypeOfAccount.navigate_to_view_page(1)
        viewTypeOfAccount.click_ok_button()
        typeOfAccount.click_on_search_button()
    })

})