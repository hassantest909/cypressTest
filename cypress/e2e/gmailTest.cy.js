

describe('Login to Gmail and open second email in inbox', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
    it('Logs in and opens second email', () => {
      // visit the Gmail login page
      cy.visit('https://www.gmail.com')
  
      // enter email address and click Next button
      cy.get('#identifierId')
        .type('magabugosh@gmail.com')
      cy.get('#identifierNext')
        .click()
  
      // enter password and click Next button
      cy.get('#password', {timeout: 15000})
        .type('mag@2022')
      cy.get('#passwordNext')
        .click()
  
      // wait for the inbox to load
      cy.contains('Compose', {timeout: 15000})
  
      // open the second email in the inbox
      cy.get('table[role="grid"] tbody tr:nth-child(2) td.xY.a4W')
        .click()
    })
  })