/// <reference types="cypress" />

import { TypeOfAccount } from "../Page_Objects/Type_Of_Account_Obj"
import { UpdateAccountType } from "../Page_Objects/update_Type_Of_Account_Obj"
const typeOfAccount = new TypeOfAccount()
const updateAccountType = new UpdateAccountType()

describe('Update Type of Account',()=>{
    beforeEach(()=>{
        cy.login('text','text')
        cy.visit('http://10.0.1.4/')
        updateAccountType.navigate_to_account_type()
    })

    it('Verify that input fields are not null',()=>{
        updateAccountType.select_status(2)//approved
        updateAccountType.click_on_search_button()
        //cy.wait(5000)
        updateAccountType.navigate_to_update_page(1)
        updateAccountType.verify_input_fields_not_empty()
    })

    it('Verify that input fields are not disabled',()=>{
        updateAccountType.select_status(2)//approved
        updateAccountType.click_on_search_button()
        //cy.wait(5000)
        updateAccountType.navigate_to_update_page(1)
        updateAccountType.varify_input_fields_are_not_disabled()     
    })

    it('Verify that validation messages are visible when update button is click without providing mandatory fields',()=>{
        updateAccountType.select_status(2)//approved
        updateAccountType.click_on_search_button()
        //cy.wait(5000)
        updateAccountType.navigate_to_update_page(1)
        cy.wait(2000)
        updateAccountType.clear_input_fields()
        updateAccountType.click_on_update_button()
        updateAccountType.verify_validation_message(1)
        updateAccountType.verify_validation_message(2)
        updateAccountType.verify_validation_message(3)
        updateAccountType.verify_validation_message(4)
        updateAccountType.verify_validation_message(5)
    })

    it('Verify user should not be able to enter aphabtes and special characters in number field',()=>{
        updateAccountType.select_status(2)//approved
        updateAccountType.click_on_search_button()
        //cy.wait(5000)
        updateAccountType.navigate_to_update_page(1)
        cy.wait(2000)
        updateAccountType.clear_input_fields()
        updateAccountType.enter_daily_trans_limit_dr_and_verify('@test')
        updateAccountType.enter_daily_amt_limit_dr_and_verify('@test')
        updateAccountType.enter_monthly_trans_limit_dr_and_verify('@test')
        updateAccountType.enter_monthly_amt_limit_dr_and_verify('@test')
        updateAccountType.enter_yearly_trans_limit_dr_and_verify('@test')
        updateAccountType.enter_yearly_amt_limit_dr_and_verify('@test')
        updateAccountType.enter_daily_trans_limit_cr_and_verify('@test')
        updateAccountType.enter_daily_amt_limit_cr_and_verify('@test')
        updateAccountType.enter_monthly_amt_limit_cr_and_verify('@test')
        updateAccountType.enter_monthly_trans_limit_cr_and_verify('@test')
        updateAccountType.enter_yearly_amt_limit_cr_and_verify('@test')
        updateAccountType.enter_yearly_trans_limit_cr_and_verify('@test')
        updateAccountType.enter_max_amount_and_verify('@test/')
    })

    it('Verify cancel button is working',()=>{
        updateAccountType.select_status(2)//approved
        updateAccountType.click_on_search_button()
        //cy.wait(5000)
        updateAccountType.navigate_to_update_page(1)
        updateAccountType.click_cancel_button()
        typeOfAccount.click_on_search_button()
    })

    it('Verify that user is able to update the Account Type',()=>{
        updateAccountType.select_status(2)//approved
        updateAccountType.click_on_search_button()
        //cy.wait(5000)
        updateAccountType.navigate_to_update_page(1)
        updateAccountType.enter_account_name('LEVEL '+updateAccountType.accountNameGenerater())
        updateAccountType.select_account_type('BUSINESS')
        updateAccountType.select_Kyc_set_type()
        updateAccountType.enter_daily_trans_limit_dr(20)
        updateAccountType.enter_daily_amt_limit_dr(20)
        updateAccountType.enter_monthly_trans_limit_dr(20)
        updateAccountType.enter_monthly_amt_limit_dr(20)
        updateAccountType.enter_yearly_trans_limit_dr(20)
        updateAccountType.enter_yearly_amt_limit_dr(20)
        updateAccountType.enter_daily_trans_limit_cr(20)
        updateAccountType.enter_daily_amt_limit_cr(20)
        updateAccountType.enter_monthly_amt_limit_cr(20)
        updateAccountType.enter_monthly_trans_limit_cr(20)
        updateAccountType.enter_yearly_amt_limit_cr(20)
        updateAccountType.enter_yearly_trans_limit_cr(20)
        updateAccountType.enter_max_amount(20000)
        updateAccountType.click_on_update_button()
        //cy.wait(3000)
        updateAccountType.verify_success_dialog_isvisible('submitted for approval','already pending for approval')

    })   
})