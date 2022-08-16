/// <reference types="cypress" />

describe('Validate All Mandatory Fields are throwing Error Instruction', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("/")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Valdiate URL https://www.thepaystubs.com/form/w9/create', () => {
        cy.url().should('include', 'https://www.thepaystubs.com/form/w9/create')
    });
    it('Click on Submit information button to check Error Instruction for Mandatory fields ', () => {
        cy.get('#submit').click();
    })
    it('It Should Throw Error Instruction that Name is required Against Name Field', () => {
        cy.contains('Name is required');
    })
    it('It Should Throw Error Instruction that Street Address is required Against Street Address Field', () => {
        cy.contains('Street Address is required');
    })
    it('It Should Throw Error Instruction that City is required Against City Field', () => {
        cy.contains('City is required')
        //Also City color is not being changed to red  
    })
    it('It Should Throw Error Instruction that State is required Against State Field', () => {
        cy.contains('State is required')
    })
    it('It Should Throw Error Instruction that Zip Code is required Against Zip code Field', () => {
        cy.contains('Zip Code is required')
    })
    it('It Should Throw Error Instruction that U.S. Federal Tax Classification is required Against U.S. Federal Tax Classification Field', () => {
        cy.contains('U.S. Federal Tax Classification is required')
    })
    it('It Should Throw Error Instruction that Social Security Number (SSN) is required Against  Social Security Number (SSN)  Field', () => {
        cy.contains('Social Security Number (SSN) is required');
    })
    it('It Should Throw Error Instruction that Email is required Against Email Field', () => {
        cy.contains('Email is required');
    })
})
describe(' Desktop Version: Validate W9 Form Successfully submitted after filling out Form With SSN', () => {
    var email = 'test' + Math.floor(Math.random() * 1001) + '@codedict.com'
    context('Desktop Version ', () => {
    before(() => {
        
        cy.visit("/")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Valdiate URL https://www.thepaystubs.com/form/w9/create', () => {
        cy.url().should('include', 'https://www.thepaystubs.com/form/w9/create')
    })
    it('Enter Name', () => {
        cy.get('input[id$=name]').clear().type(data.name, { force: true }).should('have.value', data.name)
    })
    it('Enter Business Name/Disregarded Entity Name', () => {
        cy.get('input[id$=businessNameDisregardedEntityName]').clear().type(data.businessName, { force: true }).should('have.value', data.businessName)
    })
    it('Enter Street Address', () => {
        cy.get('input[id$=aptSteNo]').clear().type(data.streetAddress, { force: true }).should('have.value', data.streetAddress)
    })
    it('Enter Apt/Ste No.', () => {
        cy.get('input[id$=streetAddress]').clear().type(data.suitNo, { force: true }).should('have.value', data.suitNo)
    })
    it('Enter City', () => {
        cy.get('input[id$=city]').clear().type(data.city, { force: true }).should('have.value', data.city)
    })
    it('Select State', () => {
        cy.get("div[role='combobox']").click()
        cy.contains('AL').click()
    })
    it('Enter Zip code', () => {
        cy.get('input[id$=zipCode]').clear().type(data.zipCode, { force: true }).should('have.value', data.zipCode)
    })
    it('Enter Account Number(s)', () => {
        cy.get('input[id$=accountNumbers]').clear().type(data.accountNumber, { force: true }).should('have.value', data.accountNumber)
    })
    it('Select U.S. Federal Tax Classification', () => {
        cy.get("div[role='listbox'] div[class='choices__list choices__list--single']").click({ multiple: true })
        cy.contains('S Corporation').click();
    })
    it('Enter Social Security Number (SSN)', () => {
        cy.get('input[id$=ssn]').eq(1).type(data.SSN)
    })
    it('Signature', () => {
        cy.get('.signature-pad-canvas').then($canvas => {
            // Get dimension of the canvas
      
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();
      
            // Divide in half since cursor will be at center of canvas
      
            const canvasCenterX = canvasWidth / 2;
            const canvasCenterY = canvasHeight / 2;
      
            // Determine the click position by dissecting the space where the button is
            // This helps allow the test to work responsively
      
            const buttonX = canvasCenterX + ( ( canvasCenterX / 3 ) * 2 );
            const buttonY = canvasCenterY + ( ( canvasCenterY / 9 ) * 2 );
      
            // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
      
            cy.wrap($canvas)
              .scrollIntoView()
              .click(buttonX, buttonY) });
          
        });
    it('Enter Email', () => {
        cy.get('input[id$=email]').clear().type(email, { force: true }).should('have.value', email)
    })

    it('Click on Submit information button', () => {
         cy.get('#submit').click();
    })
    it('It should Redirect to after success www.thepaystubs.com/form/w9',()=>{
        cy.url().should('include', 'www.thepaystubs.com/form/w9')
    })
})
})
describe('Mobile Version :Validate W9 Form Successfully submitted after filling out Form With SSN', () => {
    var email = 'test' + Math.floor(Math.random() * 1001) + '@codedict.com'
    context('Mobile Version ', () => {
    before(() => {
        cy.visit("/")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.viewport('iphone-xr')
      })
    it('Valdiate URL https://www.thepaystubs.com/form/w9/create', () => {
        cy.url().should('include', 'https://www.thepaystubs.com/form/w9/create')
    })
    it('Enter Name', () => {
        cy.get('input[id$=name]').clear().type(data.name, { force: true }).should('have.value', data.name)
    })
    it('Enter Business Name/Disregarded Entity Name', () => {
        cy.get('input[id$=businessNameDisregardedEntityName]').clear().type(data.businessName, { force: true }).should('have.value', data.businessName)
    })
    it('Enter Street Address', () => {
        cy.get('input[id$=aptSteNo]').clear().type(data.streetAddress, { force: true }).should('have.value', data.streetAddress)
    })
    it('Enter Apt/Ste No.', () => {
        cy.get('input[id$=streetAddress]').clear().type(data.suitNo, { force: true }).should('have.value', data.suitNo)
    })
    it('Enter City', () => {
        cy.get('input[id$=city]').clear().type(data.city, { force: true }).should('have.value', data.city)
    })
    it('Select State', () => {
        cy.get("div[role='combobox']").click()
        cy.contains('AL').click()
    })
    it('Enter Zip code', () => {
        cy.get('input[id$=zipCode]').clear().type(data.zipCode, { force: true }).should('have.value', data.zipCode)
    })
    it('Enter Account Number(s)', () => {
        cy.get('input[id$=accountNumbers]').clear().type(data.accountNumber, { force: true }).should('have.value', data.accountNumber)
    })
    it('Select U.S. Federal Tax Classification', () => {
        cy.get("div[role='listbox'] div[class='choices__list choices__list--single']").click({ multiple: true })
        cy.contains('S Corporation').click();
    })
    it('Enter Social Security Number (SSN)', () => {
        cy.get('input[id$=ssn]').eq(1).type(data.SSN)
    })
    it('Signature', () => {
        cy.get('.signature-pad-canvas').then($canvas => {
            // Get dimension of the canvas
      
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();
      
            // Divide in half since cursor will be at center of canvas
      
            const canvasCenterX = canvasWidth / 2;
            const canvasCenterY = canvasHeight / 2;
      
            // Determine the click position by dissecting the space where the button is
            // This helps allow the test to work responsively
      
            const buttonX = canvasCenterX + ( ( canvasCenterX / 3 ) * 2 );
            const buttonY = canvasCenterY + ( ( canvasCenterY / 9 ) * 2 );
      
            // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
      
            cy.wrap($canvas)
              .scrollIntoView()
              .click(buttonX, buttonY) });
          
        });
    it('Enter Email', () => {
        cy.get('input[id$=email]').clear().type(email, { force: true }).should('have.value', email)
    })

    it('Click on Submit information button', () => {
         cy.get('#submit').click();
    })
    it('It should Redirect to after success www.thepaystubs.com/form/w9',()=>{
        cy.url().should('include', 'www.thepaystubs.com/form/w9')
    })
})
})
describe(' Desktop Version: Validate W9 Form Successfully submitted after filling out Form With Employer Identification Number (EIN)', () => {
    var email = 'test' + Math.floor(Math.random() * 1001) + '@codedict.com'
    context('Desktop Version ', () => {
    before(() => {
        
        cy.visit("/")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Valdiate URL https://www.thepaystubs.com/form/w9/create', () => {
        cy.url().should('include', 'https://www.thepaystubs.com/form/w9/create')
    })
    it('Enter Name', () => {
        cy.get('input[id$=name]').clear().type(data.name, { force: true }).should('have.value', data.name)
    })
    it('Enter Business Name/Disregarded Entity Name', () => {
        cy.get('input[id$=businessNameDisregardedEntityName]').clear().type(data.businessName, { force: true }).should('have.value', data.businessName)
    })
    it('Enter Street Address', () => {
        cy.get('input[id$=aptSteNo]').clear().type(data.streetAddress, { force: true }).should('have.value', data.streetAddress)
    })
    it('Enter Apt/Ste No.', () => {
        cy.get('input[id$=streetAddress]').clear().type(data.suitNo, { force: true }).should('have.value', data.suitNo)
    })
    it('Enter City', () => {
        cy.get('input[id$=city]').clear().type(data.city, { force: true }).should('have.value', data.city)
    })
    it('Select State', () => {
        cy.get("div[role='combobox']").click()
        cy.contains('AL').click()
    })
    it('Enter Zip code', () => {
        cy.get('input[id$=zipCode]').clear().type(data.zipCode, { force: true }).should('have.value', data.zipCode)
    })
    it('Enter Account Number(s)', () => {
        cy.get('input[id$=accountNumbers]').clear().type(data.accountNumber, { force: true }).should('have.value', data.accountNumber)
    })
    it('Select U.S. Federal Tax Classification', () => {
        cy.get("div[role='listbox'] div[class='choices__list choices__list--single']").click({ multiple: true })
        cy.contains('S Corporation').click();
    })
    it('Select Employer Identification Number (EIN)', () => {
        cy.contains('Employer Identification Number (EIN)').click()
    })
    it('Enter Employer Identification Number (EIN)', () => {
        cy.get('input[name="data[ein]"]').type(data.EIN)
    })
    it('Signature', () => {
        cy.get('.signature-pad-canvas').then($canvas => {
            // Get dimension of the canvas
      
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();
      
            // Divide in half since cursor will be at center of canvas
      
            const canvasCenterX = canvasWidth / 2;
            const canvasCenterY = canvasHeight / 2;
      
            // Determine the click position by dissecting the space where the button is
            // This helps allow the test to work responsively
      
            const buttonX = canvasCenterX + ( ( canvasCenterX / 3 ) * 2 );
            const buttonY = canvasCenterY + ( ( canvasCenterY / 9 ) * 2 );
      
            // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
      
            cy.wrap($canvas)
              .scrollIntoView()
              .click(buttonX, buttonY) });
          
        });
    it('Enter Email', () => {
        cy.get('input[id$=email]').clear().type(email, { force: true }).should('have.value', email)
    })

    it('Click on Submit information button', () => {
         cy.get('#submit').click();
    })
    it('It should Redirect to after success www.thepaystubs.com/form/w9',()=>{
        cy.url().should('include', 'www.thepaystubs.com/form/w9')
    })
})
})
describe('Mobile Version :Validate W9 Form Successfully submitted after filling out Form With Employer Identification Number (EIN)', () => {
    var email = 'test' + Math.floor(Math.random() * 1001) + '@codedict.com'
    context('Mobile Version ', () => {
    before(() => {
        cy.visit("/")
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.viewport('iphone-8')
      })
    it('Valdiate URL https://www.thepaystubs.com/form/w9/create', () => {
        cy.url().should('include', 'https://www.thepaystubs.com/form/w9/create')
    })
    it('Enter Name', () => {
        cy.get('input[id$=name]').clear().type(data.name, { force: true }).should('have.value', data.name)
    })
    it('Enter Business Name/Disregarded Entity Name', () => {
        cy.get('input[id$=businessNameDisregardedEntityName]').clear().type(data.businessName, { force: true }).should('have.value', data.businessName)
    })
    it('Enter Street Address', () => {
        cy.get('input[id$=aptSteNo]').clear().type(data.streetAddress, { force: true }).should('have.value', data.streetAddress)
    })
    it('Enter Apt/Ste No.', () => {
        cy.get('input[id$=streetAddress]').clear().type(data.suitNo, { force: true }).should('have.value', data.suitNo)
    })
    it('Enter City', () => {
        cy.get('input[id$=city]').clear().type(data.city, { force: true }).should('have.value', data.city)
    })
    it('Select State', () => {
        cy.get("div[role='combobox']").click()
        cy.contains('AL').click()
    })
    it('Enter Zip code', () => {
        cy.get('input[id$=zipCode]').clear().type(data.zipCode, { force: true }).should('have.value', data.zipCode)
    })
    it('Enter Account Number(s)', () => {
        cy.get('input[id$=accountNumbers]').clear().type(data.accountNumber, { force: true }).should('have.value', data.accountNumber)
    })
    it('Select U.S. Federal Tax Classification', () => {
        cy.get("div[role='listbox'] div[class='choices__list choices__list--single']").click({ multiple: true })
        cy.contains('S Corporation').click();
    })
    it('Select Employer Identification Number (EIN)', () => {
        cy.contains('Employer Identification Number (EIN)').click()
    })
    it('Enter Employer Identification Number (EIN)', () => {
        cy.get('input[name="data[ein]"]').type(data.EIN)
    })
    it('Signature', () => {
        cy.get('.signature-pad-canvas').then($canvas => {
            // Get dimension of the canvas
      
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();
      
            // Divide in half since cursor will be at center of canvas
      
            const canvasCenterX = canvasWidth / 2;
            const canvasCenterY = canvasHeight / 2;
      
            // Determine the click position by dissecting the space where the button is
            // This helps allow the test to work responsively
      
            const buttonX = canvasCenterX + ( ( canvasCenterX / 3 ) * 2 );
            const buttonY = canvasCenterY + ( ( canvasCenterY / 9 ) * 2 );
      
            // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
      
            cy.wrap($canvas)
              .scrollIntoView()
              .click(buttonX, buttonY) });
          
        });
    it('Enter Email', () => {
        cy.get('input[id$=email]').clear().type(email, { force: true }).should('have.value', email)
    })

    it('Click on Submit information button', () => {
         cy.get('#submit').click();
    })
    it('It should Redirect to after success www.thepaystubs.com/form/w9',()=>{
        cy.url().should('include', 'www.thepaystubs.com/form/w9')
    })
})
})
