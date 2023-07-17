/// <reference types="cypress" />

import { AddTypeOfAccount } from "../Page_Objects/Add_Type_Of_Account_Obj"
const addTypeofAccount = new AddTypeOfAccount()

describe("Add Type of Account Positive UI Testcases",()=>{
    beforeEach(()=>{
        cy.login('employess@gmail.com','123456')
        cy.visit('http://10.0.1.4/#/');
        addTypeofAccount.navigate_to_add_account_page();
    })

    it("Verify that user is able to create new account type [Individual]",()=>{
        addTypeofAccount.enter_account_name('LEVEL '+addTypeofAccount.accountNameGenerater())
        addTypeofAccount.select_account_type('INDIVIDUAL')
        addTypeofAccount.select_Kyc_set_type()
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
        cy.wait(3000)
        addTypeofAccount.verify_success_dialog_isvisible('submitted for approval.')
        
    })

    it("Verify that user is able to create new account type [Business]",()=>{
        addTypeofAccount.enter_account_name('LEVEL '+addTypeofAccount.accountNameGenerater())
        addTypeofAccount.select_account_type('BUSINESS')
        addTypeofAccount.select_Kyc_set_type()
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
        cy.wait(3000)
        addTypeofAccount.verify_success_dialog_isvisible('submitted for approval.')
        
    })

    it("Verify that user is able to create new account type [Customer]",()=>{
        addTypeofAccount.enter_account_name('LEVEL '+addTypeofAccount.accountNameGenerater())
        addTypeofAccount.select_account_type('CUSTOMER')
        addTypeofAccount.select_Kyc_set_type()
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
        cy.wait(3000)
        addTypeofAccount.verify_success_dialog_isvisible('submitted for approval.')
        
    })

    it("Verify that user should not be able to create record with same name",()=>{
        addTypeofAccount.enter_account_name('Test')
        addTypeofAccount.select_account_type('INDIVIDUAL')
        addTypeofAccount.select_Kyc_set_type()
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
        cy.wait(3000)
        addTypeofAccount.verify_success_dialog_isvisible('Record Already Exist')
        
    })

    it("Verify that user should not be able enter Alphabets in numeric fields",()=>{
        //addTypeofAccount.enter_account_name('Test')
        addTypeofAccount.select_account_type('INDIVIDUAL')
        addTypeofAccount.select_Kyc_set_type()
        addTypeofAccount.enter_daily_trans_limit_dr('Hello')
        addTypeofAccount.enter_daily_amt_limit_dr('Hello')
        addTypeofAccount.enter_monthly_trans_limit_dr('Hello')
        addTypeofAccount.enter_monthly_amt_limit_dr('Hello')
        addTypeofAccount.enter_yearly_trans_limit_dr('Hello')
        addTypeofAccount.enter_yearly_amt_limit_dr('Hello')
        addTypeofAccount.enter_daily_trans_limit_cr('Hello')
        addTypeofAccount.enter_daily_amt_limit_cr('Hello')
        addTypeofAccount.enter_monthly_amt_limit_cr('Hello')
        addTypeofAccount.enter_monthly_trans_limit_cr('Hello')
        addTypeofAccount.enter_yearly_amt_limit_cr('Hello')
        addTypeofAccount.enter_yearly_trans_limit_cr('Hello')
        addTypeofAccount.enter_max_amount('Hello')
        addTypeofAccount.click_on_submit_button()
        cy.wait(3000)

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

    it.only("Verify that input fields are not disabled",()=>{
        cy.get('#accountLevelName').should('not.be.disabled')
        cy.get('#maxAmtLimit').should('not.be.disabled')
        cy.get('#lkpAccountClassificationId').should('not.be.disabled')
        cy.get('#kycSetHeadId').should('not.be.disabled')
    })
    
})