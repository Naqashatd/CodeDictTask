/// <reference types="cypress" />

describe('Validate All Button are working', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("https://www.calculator.net/discount-calculator.html")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Valdiate URL https://www.calculator.net/discount-calculator.html', () => {
        cy.url().should('include', 'discount-calculator.html') 
    });
    it('Verify its Header',()=>{
cy.contains('Discount Calculator')
    })
    it('Validate Price before should be editable',()=>{
        cy.get('[name="pricebefore"]').clear().type(data.priceBefore1, { force: true }).should('have.value', data.priceBefore1)
    })
    it('Validate Discount should be editable',()=>{
        cy.get('[name="discount"]').clear().type(data.discount1, { force: true }).should('have.value', data.discount1)  
    })
    it('Validate Price After should be editable',()=>{
        cy.get('[name="priceafter"]').clear().type(data.priceAfter1, { force: true }).should('have.value', data.priceAfter1)
          
    })
    it('Validate Saved amount should be editable',()=>{
        cy.get('[name="savedamount"]').clear().type(data.youSaved1, { force: true }).should('have.value', data.youSaved1)
          
    })
    it('Calculate Button should be clickable',()=>{
        cy.get('[value="Calculate"]').click()
        
    })
    it('Clear Button should Clear values',()=>{
        cy.get('[class="clearbtn"]').click()
        
    })
})
describe('Validating Calculation when entering Price Before and Discount in percentage', () => {
    before(() => {
        cy.visit("https://www.calculator.net/discount-calculator.html")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Validate Price before should be editable',()=>{
         cy.get('[name="pricebefore"]').clear().type(data.priceBefore1, { force: true }).should('have.value', data.priceBefore1)
    })
    it('Validate Discount should be editable',()=>{
       cy.get('[name="discount"]').clear().type(data.discount1, { force: true }).should('have.value', data.discount1)
        
    })
    it('Calculate Button should be clickable',()=>{
        cy.get('[value="Calculate"]').click()
        
    })
    it('Validate it Should have Price after discount: ',()=>{
        cy.contains('Price after discount: ');
        cy.contains('$45.00')
        
    })
    it('Validate it Should have You saved: ',()=>{
        cy.contains('You saved: ');
        cy.contains('$5.00')
        
    })
})
describe('Validating Calculation when entering Price Before and Price after in percentage', () => {
    before(() => {
        cy.visit("https://www.calculator.net/discount-calculator.html")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Validate Price before should be editable',()=>{
         cy.get('[name="pricebefore"]').clear().type(data.priceBefore1, { force: true }).should('have.value', data.priceBefore1)
    })
    it('Validate Price After should be editable',()=>{
        cy.get('[name="priceafter"]').clear().type(data.priceAfter1, { force: true }).should('have.value', data.priceAfter1)
          
    })
    it('Calculate Button should be clickable',()=>{
        cy.get('[value="Calculate"]').click()
        
    })
    it('Validate it Should have Price after discount: ',()=>{
        cy.contains('Price after discount: ');
        cy.contains('$42.50')
        
    })
    it('Validate it Should have You saved: ',()=>{
        cy.contains('You saved: ');
        cy.contains('$7.50')
        
    })
})
describe('Validating Calculation when entering Price Before and Saved Amount in percentage', () => {
    before(() => {
        cy.visit("https://www.calculator.net/discount-calculator.html")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Validate Price before should be editable',()=>{
         cy.get('[name="pricebefore"]').clear().type(data.priceBefore1, { force: true }).should('have.value', data.priceBefore1)
    })
    it('Validate Saved amount should be editable',()=>{
        cy.get('[name="savedamount"]').clear().type(data.youSaved1, { force: true }).should('have.value', data.youSaved1)
          
    })
    it('Calculate Button should be clickable',()=>{
        cy.get('[value="Calculate"]').click()
        
    })
    it('Validate it Should have Price after discount: ',()=>{
        cy.contains('Price after discount: ');
        cy.contains('$42.50')
        
    })
    it('Validate it Should have You saved: ',()=>{
        cy.contains('You saved: ');
        cy.contains('$7.50')
        
    })
})
describe('Validating Calculation when entering Price Before and Discount with fixed amount', () => {
    before(() => {
        cy.visit("https://www.calculator.net/discount-calculator.html")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Select Fixed amount',()=>{
        cy.contains('Fixed amount off').click()
    })
    it('Validate Price before should be editable',()=>{
         cy.get('[name="pricebefore"]').clear().type(data.priceBefore2, { force: true }).should('have.value', data.priceBefore2)
    })
    it('Validate Discount should be editable',()=>{
       cy.get('[name="discount"]').clear().type(data.discount2, { force: true }).should('have.value', data.discount2)
        
    })
    it('Calculate Button should be clickable',()=>{
        cy.get('[value="Calculate"]').click()
        
    })
    it('Validate it Should have Price after discount: ',()=>{
        cy.contains('Price after discount: ');
        cy.contains('$80.00')
        
    })
    it('Validate it Should have Discount percentage:  ',()=>{
        cy.contains('Discount percentage: ');
        cy.contains('20%')
        
    })
})
describe('Validating Calculation when entering Price Before and Price after in percentage', () => {
    before(() => {
        cy.visit("https://www.calculator.net/discount-calculator.html")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Select Fixed amount',()=>{
        cy.contains('Fixed amount off').click()
    })
    it('Validate Price before should be editable',()=>{
         cy.get('[name="pricebefore"]').clear().type(data.priceBefore2, { force: true }).should('have.value', data.priceBefore2)
    })
    it('Validate Price After should be editable',()=>{
        cy.get('[name="priceafter"]').clear().type(data.priceAfter2, { force: true }).should('have.value', data.priceAfter2)
          
    })
    it('Calculate Button should be clickable',()=>{
        cy.get('[value="Calculate"]').click()
        
    })
    it('Validate it Should have Price after discount: ',()=>{
        cy.contains('Price after discount: ');
        cy.contains('$85.00')
        
    })
    it('Validate it Should have Discount percentage:  ',()=>{
        cy.contains('Discount percentage: ');
        cy.contains('15%')   
    })
})

