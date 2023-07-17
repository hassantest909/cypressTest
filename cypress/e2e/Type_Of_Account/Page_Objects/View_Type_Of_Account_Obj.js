export class ViewTypeOfAccount{
    constructor(){
        this.search_button_locator = '.Down__Btn__End > .p-button'
        this.date_to_locator = '#dateTo'
        this.date_from_locator = '#dateFrom'
        this.validation_dialog_message_locator = '.Toastify__toast-body'
        this.status_locator = '#statusId'
        this.selected_created_by_locator = '#createdBy'
        this.select_updated_by_locator = '#updatedBy'
        this.account_level_type_locator = '#accountClassificationId'

        this.daily_trans_limit_dr_locator = '#dailyTransLimitDr'
        this.daily_amt_limit_dr_locator = '#dailyAmtLimitDr'
        this.monthly_trans_limit_dr_locator = '#monthlyTransLimitDr'
        this.monthly_amt_limit_dr_locator = '#monthlyAmtLimitDr'
        this.yearly_trans_limit_dr_locator = '#yearlyTransLimitDr'
        this.yearly_amt_limit_dr_locator = '#yearlyAmtLimitDr'
        this.daily_trans_limit_cr_locator = '#dailyTransLimitCr'
        this.daily_amt_limit_cr_locator = '#dailyAmtLimitCr'
        this.monthly_trans_limit_cr_locator = '#monthlyTransLimitCr'
        this.monthly_amt_limit_cr_locator = '#monthlyAmtLimitCr'
        this.yearly_trans_limit_cr_locator = '#yearlyTransLimitCr'
        this.yearly_amt_limit_cr_locator = '#yearlyAmtLimitCr'
        this.max_balance_locator = '#maxAmtLimit'
        this.ok_button_locator = '.Down__Btn > .p-button'
        this.select_kyc_locator = '#kycSetHeadId'
    }

    verify_input_fields_are_diabled(){
        cy.get(this.daily_trans_limit_dr_locator).should('be.disabled')
        cy.get(this.daily_amt_limit_dr_locator).should('be.disabled')
        cy.get(this.monthly_trans_limit_dr_locator).should('be.disabled')
        cy.get(this.monthly_amt_limit_dr_locator).should('be.disabled')
        cy.get(this.yearly_trans_limit_dr_locator).should('be.disabled')
        cy.get(this.yearly_amt_limit_dr_locator).should('be.disabled')
        cy.get(this.daily_trans_limit_cr_locator).should('be.disabled')
        cy.get(this.daily_amt_limit_cr_locator).should('be.disabled')
        cy.get(this.monthly_trans_limit_cr_locator).should('be.disabled')
        cy.get(this.monthly_amt_limit_cr_locator).should('be.disabled')
        cy.get(this.yearly_trans_limit_cr_locator).should('be.disabled')
        cy.get(this.yearly_amt_limit_cr_locator).should('be.disabled')
        cy.get(this.max_balance_locator).should('be.disabled')
    }

    select_status(txt) {
        cy.get(this.status_locator).click()
        cy.wait(2000)
        cy.get('[aria-label="' + txt + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    verify_dropdown_list_are_disabled(){
        cy.get(this.select_kyc_locator).should('have.class','p-disabled')  
        cy.get(this.account_level_type_locator).should('have.class','.p-disabled')
    }

    click_ok_button(){
        cy.get(this.ok_button_locator).click()
    }

    click_on_search_button(){
        cy.get(this.search_button_locator).click()
    }

    navigate_to_account_type(){
        cy.get('.layout-main > :nth-child(2) > .layout-menu-container > .layout-menu > :nth-child(6) > .p-ripple').click()
        cy.get('.layout-main > :nth-child(2) > .menu-logo > .logo > img')
    }

    verify_success_dialog_isvisible(txt) {
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text();
            expect(messageText).to.include(txt)
        });
    }
    
    navigate_to_view_page(num){
        //cy.get(':nth-child('+num+') > :nth-child(5) > .actions > .p-button-icon .p-c .pi .pi-eye"').click()
        cy.get(':nth-child('+num+') > :nth-child(5) > .actions > .p-button-primary').click()
    }
}