/// <reference types="cypress" />

import { AddTypeOfAccount } from "../Page_Objects/Add_Type_Of_Account_Obj"
import { TypeOfAccount } from "../Page_Objects/Type_Of_Account_Obj"
const typeOfAccount = new TypeOfAccount()
const addTypeofAccount = new AddTypeOfAccount()

describe("Add Type of Account Positive UI Testcases",()=>{
    beforeEach(()=>{
        cy.login('employess@gmail.com','123456')
        cy.visit('http://10.0.1.4/#/');
        addTypeofAccount.navigate_to_add_account_page();
    })

    it("Verify that user is able to create new account type [Individual]",()=>{
        addTypeofAccount.enter_account_name('LEVEL '+addTypeofAccount.accountNameGenerater())
        addTypeofAccount.select_account_type(1)
        addTypeofAccount.select_Kyc_set_type(1)
        addTypeofAccount.enter_daily_trans_limit_dr(2)
        addTypeofAccount.enter_daily_amt_limit_dr(2)
        addTypeofAccount.enter_monthly_trans_limit_dr(2)
        addTypeofAccount.enter_monthly_amt_limit_dr(2)
        addTypeofAccount.enter_yearly_trans_limit_dr(2)
        addTypeofAccount.enter_yearly_amt_limit_dr(2)
        addTypeofAccount.enter_daily_trans_limit_cr(2)
        addTypeofAccount.enter_daily_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_trans_limit_cr(2)
        addTypeofAccount.enter_yearly_amt_limit_cr(2)
        addTypeofAccount.enter_yearly_trans_limit_cr(2)
        addTypeofAccount.enter_max_amount(2)
        addTypeofAccount.click_on_submit_button()
        //cy.wait(4000)
        addTypeofAccount.verify_success_dialog_isvisible('submitted for approval.','Record Already Exist')
        
    })

    it("Verify that user is able to create new account type [Business]",()=>{
        addTypeofAccount.enter_account_name('LEVEL '+addTypeofAccount.accountNameGenerater())
        addTypeofAccount.select_account_type(2)
        addTypeofAccount.select_Kyc_set_type(2)
        addTypeofAccount.enter_daily_trans_limit_dr(2)
        addTypeofAccount.enter_daily_amt_limit_dr(2)
        addTypeofAccount.enter_monthly_trans_limit_dr(2)
        addTypeofAccount.enter_monthly_amt_limit_dr(2)
        addTypeofAccount.enter_yearly_trans_limit_dr(2)
        addTypeofAccount.enter_yearly_amt_limit_dr(2)
        addTypeofAccount.enter_daily_trans_limit_cr(2)
        addTypeofAccount.enter_daily_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_trans_limit_cr(2)
        addTypeofAccount.enter_yearly_amt_limit_cr(2)
        addTypeofAccount.enter_yearly_trans_limit_cr(2)
        addTypeofAccount.enter_max_amount(2)
        addTypeofAccount.click_on_submit_button()
        //cy.wait(4000)
        addTypeofAccount.verify_success_dialog_isvisible('submitted for approval.')
        
    })

    it("Verify that user is able to create new account type [Customer]",()=>{
        addTypeofAccount.enter_account_name('LEVEL '+addTypeofAccount.accountNameGenerater())
        addTypeofAccount.select_account_type(3)
        addTypeofAccount.select_Kyc_set_type(11)
        addTypeofAccount.enter_daily_trans_limit_dr(2)
        addTypeofAccount.enter_daily_amt_limit_dr(2)
        addTypeofAccount.enter_monthly_trans_limit_dr(2)
        addTypeofAccount.enter_monthly_amt_limit_dr(2)
        addTypeofAccount.enter_yearly_trans_limit_dr(2)
        addTypeofAccount.enter_yearly_amt_limit_dr(2)
        addTypeofAccount.enter_daily_trans_limit_cr(2)
        addTypeofAccount.enter_daily_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_trans_limit_cr(2)
        addTypeofAccount.enter_yearly_amt_limit_cr(2)
        addTypeofAccount.enter_yearly_trans_limit_cr(2)
        addTypeofAccount.enter_max_amount(2)
        addTypeofAccount.click_on_submit_button()
        //cy.wait(4000)
        addTypeofAccount.verify_success_dialog_isvisible('submitted for approval.')
        
    })

    it("Verify that user should not be able to create record with same name",()=>{
        addTypeofAccount.enter_account_name('Test')
        addTypeofAccount.select_account_type(1)
        addTypeofAccount.select_Kyc_set_type(3)
        addTypeofAccount.enter_daily_trans_limit_dr(2)
        addTypeofAccount.enter_daily_amt_limit_dr(2)
        addTypeofAccount.enter_monthly_trans_limit_dr(2)
        addTypeofAccount.enter_monthly_amt_limit_dr(2)
        addTypeofAccount.enter_yearly_trans_limit_dr(2)
        addTypeofAccount.enter_yearly_amt_limit_dr(2)
        addTypeofAccount.enter_daily_trans_limit_cr(2)
        addTypeofAccount.enter_daily_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_amt_limit_cr(2)
        addTypeofAccount.enter_monthly_trans_limit_cr(2)
        addTypeofAccount.enter_yearly_amt_limit_cr(2)
        addTypeofAccount.enter_yearly_trans_limit_cr(2)
        addTypeofAccount.enter_max_amount(2)
        addTypeofAccount.click_on_submit_button()
        //cy.wait(4000)
        addTypeofAccount.verify_success_dialog_isvisible('Record Already Exist')
        
    })

    it("Verify that user should not be able enter Alphabets in numeric fields",()=>{
        //addTypeofAccount.enter_account_name('Test')
        addTypeofAccount.select_account_type(1)
        addTypeofAccount.select_Kyc_set_type(2)
        addTypeofAccount.enter_daily_trans_limit_dr_and_verify('He$#o')
        addTypeofAccount.enter_daily_amt_limit_dr_and_verify('He$#o')
        addTypeofAccount.enter_monthly_trans_limit_dr_and_verify('He$#o')
        addTypeofAccount.enter_monthly_amt_limit_dr_and_verify('He$#o')
        addTypeofAccount.enter_yearly_trans_limit_dr_and_verify('He$#o')
        addTypeofAccount.enter_yearly_amt_limit_dr_and_verify('He$#o')
        addTypeofAccount.enter_daily_trans_limit_cr_and_verify('He$#o')
        addTypeofAccount.enter_daily_amt_limit_cr_and_verify('He$#o')
        addTypeofAccount.enter_monthly_amt_limit_cr_and_verify('He$#o')
        addTypeofAccount.enter_monthly_trans_limit_cr_and_verify('He$#o')
        addTypeofAccount.enter_yearly_amt_limit_cr_and_verify('He$#o')
        addTypeofAccount.enter_yearly_trans_limit_cr_and_verify('He$#o')
        addTypeofAccount.enter_max_amount_and_verify('He$#o')
        addTypeofAccount.click_on_submit_button()
    })

    it("Verify that validation messages are visible when submit button is click without providing mandatory fields",()=>{
        addTypeofAccount.click_on_submit_button()
        addTypeofAccount.verify_validation_message(1)
        addTypeofAccount.verify_validation_message(2)
        addTypeofAccount.verify_validation_message(3)
        addTypeofAccount.verify_validation_message(4)
        addTypeofAccount.verify_validation_message(5)
        addTypeofAccount.verify_validation_message(6)
        addTypeofAccount.verify_validation_message(7)
        addTypeofAccount.verify_validation_message(8)
        addTypeofAccount.verify_validation_message(9)
    })

    it("Verify that input fields are not disabled",()=>{
        // cy.get('#accountLevelName').should('not.be.disabled')
        // cy.get('#maxAmtLimit').should('not.be.disabled')
        // cy.get('#lkpAccountClassificationId').should('not.be.disabled')
        // cy.get('#kycSetHeadId').should('not.be.disabled')
        addTypeofAccount.varify_input_fields_are_not_disabled()
    })

    it('Verify cancel button is working',()=>{
        
        addTypeofAccount.click_cancel_button()
        typeOfAccount.click_on_search_button()
    })
        
    
})