export class TypeOfAccount {

    constructor() {
        this.search_button_locator = '.Down__Btn__End > :nth-child(1)'
        this.reset_button_locator = '.Down__Btn__End > :nth-child(2)'
        this.date_to_locator = '#dateTo'
        this.date_from_locator = '#dateFrom'
        this.validation_dialog_message_locator = '.Toastify__toast-body'
        this.status_locator = '#statusId'
        this.selected_created_by_locator = '#createdBy'
        this.select_updated_by_locator = '#updatedBy'
        this.account_level_type_locator = '#accountClassificationId'
        this.validation_message_div_locator = 'small.p-error'

        this.list_updated_by_locator = '#updatedBy > .p-dropdown-label'
        this.list_created_by_locator = '#createdBy > .p-dropdown-label'
        this.list_status_locator = '#statusId > .p-dropdown-label'
        this.list_account_type_locator = '#accountClassificationId > .p-dropdown-label'
        this.table_length_locator = '.p-datatable-wrapper > .p-datatable-table tbody tr'
        this.table_next_page_locator = '.p-paginator-next'
        this.table_pre_page_locator = '.p-paginator-prev'
        this.table_drop_down_locator = '.p-paginator > .p-dropdown'
        this.table_drop_down_items_locator = '.p-dropdown-items'
    }

    select_drop_down_items_ontable(item){
        cy.get(this.table_drop_down_items_locator+'> :nth-child('+item+')').click()
    }

    click_on_drop_down_ontable(){
        cy.get(this.table_drop_down_locator).click()
    }

    click_on_next_page_ontable(){
        cy.get(this.table_next_page_locator).click()
    }

    click_on_prev_page_ontable(){
        cy.get(this.table_pre_page_locator).click()
    }

    verify_length_of_table(length){
        cy.get(this.table_length_locator,{timeout:6000}).should('have.length', length)
    }

    verify_input_fields_are_empty(){
        cy.get(this.date_from_locator).should('have.value','')
        cy.get(this.date_to_locator).should('have.value','')
    }

    verify_list_are_unselected(){
        cy.get(this.list_updated_by_locator).should('have.text','Select Updated By') 
        cy.get(this.list_created_by_locator).should('have.text','Select Created By') 
        cy.get(this.list_status_locator).should('have.text','Select status') 
        cy.get(this.list_account_type_locator).should('have.text','Select Account Type') 
    }

    navigate_to_typeofaccount_page() {
    
        cy.get('.layout-main > :nth-child(2) > .layout-menu-container > .layout-menu > :nth-child(6) > .p-ripple').click()
        cy.get('.layout-main > :nth-child(2) > .menu-logo > .logo > img') 

    }

    click_on_reset_button(){
        cy.get(this.reset_button_locator).click()
    }

    select_switch(num){
        cy.get(':nth-child('+num+') > :nth-child(5) > .actions > .p-inputswitch',{timeout:6000}).click()
    }

    check_switch_disable(num){
        cy.get(':nth-child('+num+') > :nth-child(5) > .actions > .p-inputswitch',{timeout:6000}).should('have.class','p-disabled')
    }

    select_account_type(aType) {
        cy.get(this.account_level_type_locator).click()
        cy.wait(2000)
        //cy.get('ul.p-dropdown-items li.p-dropdown-item').eq(2)
       // cy.get('[aria-label="' + aType + '"]').click()
       cy.get('.p-dropdown-items > :nth-child('+aType+')').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_status(txt) {
        cy.get(this.status_locator).click()
        cy.wait(2000)
        //cy.get('[aria-label="' + txt + '"]').click()
        cy.get('.p-dropdown-items > :nth-child('+txt+')').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_created_by(txt) {
        cy.get(this.selected_created_by_locator).click()
        cy.wait(2000)
        //cy.get('[aria-label="' + txt + '"]').click()
        cy.get('.p-dropdown-items > :nth-child('+txt+')').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    select_updated_by(txt) {
        cy.get(this.select_updated_by_locator).click()
        cy.wait(2000)
        //cy.get('[aria-label="' + txt + '"]').click()
        cy.get('.p-dropdown-items > :nth-child('+txt+')').click()
        //cy.get('.p-dropdown-items').get('BUSINESS').click()
    }

    verify_validation_message(div) {
        cy.get(this.validation_message_div_locator).should('be.visible')
    }

    click_on_search_button(){
        cy.get(this.search_button_locator).click()
    }

    verify_success_dialog_isvisible(txt) {
        cy.get(this.validation_dialog_message_locator,{timeout:6000}).should(($message) => {
            const messageText = $message.text()
            expect(messageText).to.include(txt)
        });
    }

    verify_success_dialog_isvisible2(txt, otherTxt) {
        cy.get(this.validation_dialog_message_locator,{timeout:6000}).should(($message) => {
            const messageText = $message.text()
            expect(messageText).to.satisfy((text) => {
                return text.includes(txt) || text.includes(otherTxt)
            })
        })
    }

    message_should_not_exist(txt){
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text()
            expect(messageText).should('not.exist')
        });
    }

    verify_dialog_text(txt,txt2) {
        cy.get(this.validation_dialog_message_locator).should(($message) => {
            const messageText = $message.text()
            expect(messageText).to.include(txt) ||  expect(messageText).to.include(txt2)
        });
    }

    click_on_AdNew_button() {
        cy.contains('New').click()
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