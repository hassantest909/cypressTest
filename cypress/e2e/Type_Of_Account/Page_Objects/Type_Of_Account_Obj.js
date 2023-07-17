export class TypeOfAccount {

    constructor() {
        this.search_button_locator = '.Down__Btn__End > .p-button'
        this.date_to_locator = '#dateTo'
        this.date_from_locator = '#dateFrom'
        this.validation_dialog_message_locator = '.Toastify__toast-body'
        this.status_locator = '#statusId'
        this.selected_created_by_locator = '#createdBy'
        this.select_updated_by_locator = '#updatedBy'
        this.account_level_type_locator = '#accountClassificationId'
        this.validation_message_div_locator = 'small.p-error'
    }

    navigate_to_typeofaccount_page() {
    
        cy.get('.layout-main > :nth-child(2) > .layout-menu-container > .layout-menu > :nth-child(6) > .p-ripple').click()
        cy.get('.layout-main > :nth-child(2) > .menu-logo > .logo > img') 

    }

    select_switch(num){
        cy.get(':nth-child('+num+') > :nth-child(5) > .actions > .p-inputswitch').click()
    }

    check_switch_disable(num){
        cy.get(':nth-child('+num+') > :nth-child(5) > .actions > .p-inputswitch').should('have.class','p-disabled')
    }

    select_account_type(aType) {
        cy.get(this.account_level_type_locator).click()
        cy.wait(2000)
        //cy.get('ul.p-dropdown-items li.p-dropdown-item').eq(2);
        cy.get('[aria-label="' + aType + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_status(txt) {
        cy.get(this.status_locator).click()
        cy.wait(2000)
        cy.get('[aria-label="' + txt + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_created_by(txt) {
        cy.get(this.selected_created_by_locator).click()
        cy.wait(2000)
        cy.get('[aria-label="' + txt + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_updated_by(txt) {
        cy.get(this.select_updated_by_locator).click()
        cy.wait(2000)
        cy.get('[aria-label="' + txt + '"]').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    verify_validation_message(div) {
        cy.get(this.validation_message_div_locator).should('be.visible')
    }

    click_on_search_button(){
        cy.get(this.search_button_locator).click()
    }

    verify_success_dialog_isvisible(txt) {
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text();
            expect(messageText).to.include(txt)
        });
    }

    message_should_not_exist(txt){
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text();
            expect(messageText).should('not.exist')
        });
    }

    verify_dialog_text(txt,txt2) {
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text();
            expect(messageText).to.include(txt) ||  expect(messageText).to.include(txt2)
        });
    }

    click_on_AdNew_button() {
        cy.contains('New').click();
    }

    select_accountclassification_id() {
        cy.get(this.account_classification_id_locator).select(2)
    }

    add_date_to(dateTo) {
        cy.get(this.date_to_locator).type(dateTo)
    }

    add_date_from(dateFrom) {
        cy.get(this.date_from_locator).type(dateFrom)
    }

}