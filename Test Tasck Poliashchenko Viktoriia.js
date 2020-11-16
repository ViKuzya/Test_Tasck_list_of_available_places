/// <reference types="Cypress" />

describe ('Test Task after CV ', () => {
    it('Сheck list of available places', () => {
        cy.visit('https://www.booking.com/')
        cy.url().should('include', 'booking') //Verify URL 

        cy.get('[data-component="search/destination/input"]').click(); 
        cy.get('[data-i="1"]').click(); //Сhoose location
        cy.get('[data-date="2020-12-09"]').click(); //Сhoose data
        cy.get('[data-date="2020-12-16"]').click();

        cy.get('button[type="submit"]').should('be.enabled').first().click(); //Search available places
        cy.url().should('include', '/searchresults')//Verify search results
        
    })
})
