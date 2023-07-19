export class UpdateAccountType {
    constructor() {
        this.status_locator = '#statusId'
        this.search_button_locator = '.Down__Btn__End > :nth-child(1)'
        this.account_level_name_locator = '#accountLevelName'
        this.account_level_type_locator = '#lkpAccountClassificationId'
        this.kyc_set_locator = '#kycSetHeadId'
        this.update_button_locator = '.Btn__Dark'
        this.validation_message_div_locator = '.p-error'
        this.validation_dialog_message_locator = '#pr_id_2_content > .card'

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
        this.cancel_button_locator ='.Btn__Transparent'
    }

    varify_input_fields_are_not_disabled() {
        cy.get(this.daily_trans_limit_dr_locator).should('not.be.disabled')
        cy.get(this.daily_amt_limit_dr_locator).should('not.be.disabled')
        cy.get(this.monthly_trans_limit_dr_locator).should('not.be.disabled')
        cy.get(this.monthly_amt_limit_dr_locator).should('not.be.disabled')
        cy.get(this.yearly_trans_limit_dr_locator).should('not.be.disabled')
        cy.get(this.yearly_amt_limit_dr_locator).should('not.be.disabled')

        cy.get(this.daily_trans_limit_cr_locator).should('not.be.disabled')
        cy.get(this.daily_amt_limit_cr_locator).should('not.be.disabled')
        cy.get(this.monthly_trans_limit_cr_locator).should('not.be.disabled')
        cy.get(this.monthly_amt_limit_cr_locator).should('not.be.disabled')
        cy.get(this.yearly_trans_limit_cr_locator).should('not.be.disabled')
        cy.get(this.yearly_amt_limit_cr_locator).should('not.be.disabled')

        cy.get(this.max_balance_locator).should('not.be.disabled')

        cy.get(this.account_level_type_locator).should('not.be.disabled')

    }

    verify_input_fields_not_empty() {
        cy.get(this.daily_trans_limit_dr_locator).should('not.have.value', '')
        cy.get(this.daily_amt_limit_dr_locator).should('not.have.value', '')
        cy.get(this.monthly_trans_limit_dr_locator).should('not.have.value', '')
        cy.get(this.monthly_amt_limit_dr_locator).should('not.have.value', '')
        cy.get(this.yearly_trans_limit_dr_locator).should('not.have.value', '')
        cy.get(this.yearly_amt_limit_dr_locator).should('not.have.value', '')

        cy.get(this.daily_trans_limit_cr_locator).should('not.have.value', '')
        cy.get(this.daily_amt_limit_cr_locator).should('not.have.value', '')
        cy.get(this.monthly_trans_limit_cr_locator).should('not.have.value', '')
        cy.get(this.monthly_amt_limit_cr_locator).should('not.have.value', '')
        cy.get(this.yearly_trans_limit_cr_locator).should('not.have.value', '')
        cy.get(this.yearly_amt_limit_cr_locator).should('not.have.value', '')

        cy.get(this.max_balance_locator).should('not.have.value', '')

        //cy.get(this.account_level_type_locator).should('not.have.value', '')
    }

    navigate_to_account_type() {
        cy.get('.layout-main > :nth-child(2) > .layout-menu-container > .layout-menu > :nth-child(6) > .p-ripple').click()
        cy.get('.layout-main > :nth-child(2) > .menu-logo > .logo > img')
    }

    select_status(ddvalue) {
        cy.get(this.status_locator).click()
        cy.wait(2000)
        cy.get('.p-dropdown-items > :nth-child(' + ddvalue + ')').click();
        //cy.get('[aria-label="' + txt + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_account_type(aType) {
        cy.get(this.account_level_type_locator).click()
        cy.wait(2000)
        //cy.get('ul.p-dropdown-items li.p-dropdown-item').eq(2);
        cy.get('[aria-label="' + aType + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_Kyc_set_type() {
        cy.get(this.kyc_set_locator).click()
        cy.wait(2000)
        cy.get('[aria-label="TestkycSetName"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    click_on_search_button() {
        cy.get(this.search_button_locator).click()
    }

    navigate_to_update_page(num) {
        //cy.get(':nth-child(1) > :nth-child(5) > .actions > .p-button-warning')
        cy.get(':nth-child(' + num + ') > :nth-child(5) > .actions > .p-button-warning').click()
    }

    verify_validation_message(div) {
        cy.get(this.validation_message_div_locator).eq(div).should('be.visible')
    }

    clear_input_fields() {
        cy.get(this.daily_trans_limit_dr_locator).clear()
        cy.get(this.daily_amt_limit_dr_locator).clear()
        cy.get(this.monthly_trans_limit_dr_locator).clear()
        cy.get(this.monthly_amt_limit_dr_locator).clear()
        cy.get(this.yearly_trans_limit_dr_locator).clear()
        cy.get(this.yearly_amt_limit_dr_locator).clear()

        cy.get(this.daily_trans_limit_cr_locator).clear()
        cy.get(this.daily_amt_limit_cr_locator).clear()
        cy.get(this.monthly_trans_limit_cr_locator).clear()
        cy.get(this.monthly_amt_limit_cr_locator).clear()
        cy.get(this.yearly_trans_limit_cr_locator).clear()
        cy.get(this.yearly_amt_limit_cr_locator).clear()

        cy.get(this.max_balance_locator).clear()

        cy.get(this.account_level_name_locator).clear()
    }

    click_on_update_button() {
        cy.get(this.update_button_locator).click()
    }


    enter_account_name(name) {
        cy.get(this.account_level_name_locator).type(name)
    }

    verify_validation_message(div) {
        cy.get(this.validation_message_div_locator).eq(div).should('be.visible')
    }

    enter_daily_trans_limit_dr(txt) {
        cy.get(this.daily_trans_limit_dr_locator).type(txt)
    }

    enter_daily_amt_limit_dr(txt) {
        cy.get(this.daily_amt_limit_dr_locator).type(txt)
    }

    enter_monthly_trans_limit_dr(txt) {
        cy.get(this.monthly_trans_limit_dr_locator).type(txt)
    }

    enter_monthly_amt_limit_dr(txt) {
        cy.get(this.monthly_amt_limit_dr_locator).type(txt)
    }

    enter_yearly_trans_limit_dr(txt) {
        cy.get(this.yearly_trans_limit_dr_locator).type(txt)
    }

    enter_yearly_amt_limit_dr(txt) {
        cy.get(this.yearly_amt_limit_dr_locator).type(txt)
    }

    enter_daily_trans_limit_cr(txt) {
        cy.get(this.daily_trans_limit_cr_locator).type(txt)
    }

    enter_daily_amt_limit_cr(txt) {
        cy.get(this.daily_amt_limit_cr_locator).type(txt)
    }

    enter_monthly_trans_limit_cr(txt) {
        cy.get(this.monthly_trans_limit_cr_locator).type(txt)
    }

    enter_monthly_amt_limit_cr(txt) {
        cy.get(this.monthly_amt_limit_cr_locator).type(txt)
    }

    enter_yearly_trans_limit_cr(txt) {
        cy.get(this.yearly_trans_limit_cr_locator).type(txt)
    }

    enter_yearly_amt_limit_cr(txt) {
        cy.get(this.yearly_amt_limit_cr_locator).type(txt)
    }

    enter_max_amount(txt) {
        cy.get(this.max_balance_locator).type(txt)
    }

    accountNameGenerater() {
        const timestamp = new Date().getTime(); // Get current timestamp in milliseconds
        const randomSuffix = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 9999
        // Combine timestamp and random number to create a unique number
        const randomNumber = `${timestamp}${randomSuffix}`;
        return randomNumber;
    }

    verify_success_dialog_isvisible(txt, otherTxt) {
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text()
            expect(messageText).to.satisfy((text) => {
                return text.includes(txt) || text.includes(otherTxt)
            })
        })
    }

    click_cancel_button(){
        cy.get(this.cancel_button_locator).click()
    }


    enter_account_name_and_verify(name) {
        cy.get(this.account_level_name_locator).type(name).should('have.value','')
    }

    enter_daily_trans_limit_dr_and_verify(txt) {
        cy.get(this.daily_trans_limit_dr_locator).type(txt).should('have.value','')
    }

    enter_daily_amt_limit_dr_and_verify(txt) {
        cy.get(this.daily_amt_limit_dr_locator).type(txt).should('have.value','')
    }

    enter_monthly_trans_limit_dr_and_verify(txt) {
        cy.get(this.monthly_trans_limit_dr_locator).type(txt).should('have.value','')
    }

    enter_monthly_amt_limit_dr_and_verify(txt) {
        cy.get(this.monthly_amt_limit_dr_locator).type(txt).should('have.value','')
    }

    enter_yearly_trans_limit_dr_and_verify(txt) {
        cy.get(this.yearly_trans_limit_dr_locator).type(txt).should('have.value','')
    }

    enter_yearly_amt_limit_dr_and_verify(txt) {
        cy.get(this.yearly_amt_limit_dr_locator).type(txt).should('have.value','')
    }

    enter_daily_trans_limit_cr_and_verify(txt) {
        cy.get(this.daily_trans_limit_cr_locator).type(txt).should('have.value','')
    }

    enter_daily_amt_limit_cr_and_verify(txt) {
        cy.get(this.daily_amt_limit_cr_locator).type(txt).should('have.value','')
    }

    enter_monthly_trans_limit_cr_and_verify(txt) {
        cy.get(this.monthly_trans_limit_cr_locator).type(txt).should('have.value','')
    }

    enter_monthly_amt_limit_cr_and_verify(txt) {
        cy.get(this.monthly_amt_limit_cr_locator).type(txt).should('have.value','')
    }

    enter_yearly_trans_limit_cr_and_verify(txt) {
        cy.get(this.yearly_trans_limit_cr_locator).type(txt).should('have.value','')
    }

    enter_yearly_amt_limit_cr_and_verify(txt) {
        cy.get(this.yearly_amt_limit_cr_locator).type(txt).should('have.value','')
    }

    enter_max_amount_and_verify(txt) {
        cy.get(this.max_balance_locator).type(txt).should('have.value','')
    }

}