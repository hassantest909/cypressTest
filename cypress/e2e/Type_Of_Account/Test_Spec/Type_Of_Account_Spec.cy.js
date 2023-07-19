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
        typeObj.select_account_type(1)//individual
        typeObj.select_status(2)//approved
        typeObj.select_created_by(69) //MKashif
        typeObj.select_updated_by(69)//MKashif
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.click_on_search_button()
        typeObj.verify_success_dialog_isvisible2('Success', 'Record Not Found')
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

    it("Very that user is able to inactive an account type", () => {
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.select_status(2)
        typeObj.click_on_search_button()
        cy.wait(6000)
        typeObj.select_switch(5)
        typeObj.verify_dialog_text('This record is already pending for approval', 'Success')
        //typeObj.verify_success_dialog_isvisible('This record is already pending for approval')
    })

    it("Verify user should not be able to active a pending account type", () => {
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.select_status(1)
        typeObj.click_on_search_button()
        cy.wait(6000)
        //typeObj.select_switch(5)   
        typeObj.check_switch_disable(1)
        //typeObj.verify_dialog_text('This record is already pending for approval','Success')
        //typeObj.verify_success_dialog_isvisible('This record is already pending for approval')
    })

    it('Verify that reset button is working', () => {
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.select_account_type(1)//individual
        typeObj.select_status(2)//approved
        typeObj.select_created_by(69) //MKashif
        typeObj.select_updated_by(69)//MKashif
        typeObj.click_on_reset_button()
        typeObj.verify_input_fields_are_empty()
        typeObj.verify_list_are_unselected()
    })

    it('Verify table should display 5 rows when ',()=>{
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.click_on_search_button()
        cy.wait(6000)
        typeObj.verify_length_of_table(5)
    })

    it('Verify Next and Previous page table pagination navigatior is working',()=>{
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.click_on_search_button()
        cy.wait(6000)
        typeObj.click_on_next_page_ontable()
        typeObj.verify_length_of_table(5)

        typeObj.click_on_prev_page_ontable()
        typeObj.verify_length_of_table(5)
    })

    it('Verify table list dropdown is working',()=>{
        typeObj.add_date_from('2023-07-01')
        typeObj.add_date_to('2023-07-07')
        typeObj.click_on_search_button()
        cy.wait(6000)
        typeObj.click_on_drop_down_ontable()
        typeObj.select_drop_down_items_ontable(3)//25
        typeObj.verify_length_of_table(25)

        typeObj.click_on_drop_down_ontable()
        typeObj.select_drop_down_items_ontable(2)//10
        typeObj.verify_length_of_table(10)

        typeObj.click_on_drop_down_ontable()
        typeObj.select_drop_down_items_ontable(1)//5
        typeObj.verify_length_of_table(5)
    })

    // it.only('Should search and display matching results in the table', () => {
    //     typeObj.add_date_from('2023-07-01')
    //     typeObj.add_date_to('2023-07-07')
    //     typeObj.click_on_search_button()
    //     cy.wait(6000)
    //     const searchTerm = 'pending'; // Replace with the search term you want to test
    //     searchTerm.trim().toLowerCase()
    //     typeObj.click_on_drop_down_ontable()
    //     typeObj.select_drop_down_items_ontable(3)//25
    //     typeObj.verify_length_of_table(25)
    //     // Type the search term in the search input (replace '.search-input' with the actual selector)
    //     cy.get('.Global__Header > :nth-child(2)').type('test');
    
    //     // Verify that the table displays matching results
    //     cy.get('.p-datatable-wrapper > .p-datatable-table tbody tr')
    //       .each(($row) => {
    //         // Check if each row contains the search term
    //         const txt = $row.text().trim().toLowerCase()
    //         cy.wrap(txt).should('contain',searchTerm)
    //       });
    //   });


    //   it('Should search and display matching results in the table', () => {
    //     typeObj.add_date_from('2023-07-01')
    //     typeObj.add_date_to('2023-07-07')
    //     typeObj.click_on_search_button()
    //     cy.wait(6000)

    //     const searchTerm = 'TEST'; // Replace with the search term you want to test
      
    //     // Type the search term in the search input (replace '.search-input' with the actual selector)
    //     cy.get('.Global__Header > :nth-child(2)').type(searchTerm);
      
    //     // Verify that the table displays matching results
    //     cy.get('.p-datatable-wrapper > .p-datatable-table tbody tr').each(($row) => {
    //       // Check if any of the columns in the row contains the search term
    //       cy.wrap($row).find('td').each(($cell) => {
    //         const cellText = $cell.text();
    //         expect(cellText).to.include(searchTerm)
    //       });
    //     });
    //     });

    // it('Sow table rows', () => {
    //     typeObj.add_date_from('2023-07-01')
    //     typeObj.add_date_to('2023-07-07')
    //     typeObj.click_on_search_button()
    //     cy.wait(6000)
    //     cy.get('.p-datatable-wrapper > .p-datatable-table')
    //         .find('tr')
    //         .its('length')
    //         .then((rowCount) => {
    //             cy.log('Row count:', rowCount-1)
    //         })
    // })

    // it.skip('Test', () => {
    //     typeObj.add_date_from('2023-07-01')
    //     typeObj.add_date_to('2023-07-07')
    //     typeObj.click_on_search_button()
    //     //cy.get(':nth-child(3) > :nth-child(5) > .actions > .p-button-primary').click()
    //     cy.get('.p-datatable-wrapper > .p-datatable-table').contains('td', '2023-07-04').should('be.visible')
    //     let values = []
    //     cy.get('.p-datatable-wrapper > .p-datatable-table > tbody > tr')
    //         .find('td')
    //         .each(($el, $index) => {
    //             cy.wrap($el)
    //                 .invoke('text')
    //                 .then(text => {
    //                     if ($index !== 0)
    //                         values.push(text.trim())
    //                 })
    //         })
    //         //.then(() => expect(values).to.deep.eq(["Value1", "Value2", "Value3"]))
    //         cy.log(values)
    // })

})