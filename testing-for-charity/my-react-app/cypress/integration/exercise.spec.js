/// <reference types="cypress" />

describe('Exercise', () => {
    it('loads', ()=> {
        /** Your code below */
        cy.visit('/');
        cy.get('.App-link').should('be.visible')
        //1. Use cy.visit('/') to go to the app url
        //2. Use cy.get('.App-link').should('be.visible') to assert valid state
        /** Your code above */
    })
    
    it('link goes to ultimateqa', ()=> {
        /** Your code below */
        cy.visit('/');
        cy.get('.App-link').should('have.attr','href').and('include', 'ultimateqa.com');
        // 1. Use cy.visit('/') to go to the app url
        // 2. cy.get('').should('have.attr', 'href').and('include', 'ultimateqa.com')
    
        /** Your code above */
    })
    
    it('should open link in new tab',()=> {
        /** Your code below */
        cy.visit('/');
        cy.get('.App-link').should('have.attr','target').and('equal', '_blank');
        // 1. Cmon, you know how to open the url now :)
        // 2. cy.get('').should('have.attr', 'WHAT').and('include', 'WHAT VALUE')
    
        /** Your code above */
    })  
})
