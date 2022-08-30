/* here is the Task script */
const url = 'https://react-email-editor-demo.netlify.app/'
describe('Test case Simple Test', () => {
     it('Visit Url', () => {
          cy.visit(url, { timeout: 50000 });
          cy.get('iframe').then($iframe => {
               const $body = $iframe.contents().find('body').trigger('dragstart');
               //DragStart A
               cy.wrap($body).find("[aria-describedby='tippy-tooltip-98']").trigger('dragstart');
               //Location Logo
               cy.wrap($body).find("div[id='u_column_2'] div div[class='blockbuilder-layer-selector blockbuilder-layer-selector-first']")
                    .trigger('dragenter', { force: true })
                    .trigger('dragover', { force: true })
                    .trigger('drop', { force: true })
                    .wait(50)
                    .trigger('dragend', { force: true });
                    //Edit
               cy.wrap($body).find(".blockbuilder-layer-selectable:nth-of-type(4) .u-col:nth-of-type(2) .blockbuilder-layer-selector-first").click()
               //Clear 
               cy.wrap($body).find("[data-mce-style]").clear()
               //Write the text
               cy.wrap($body).find("[contenteditable]").type("Design Test");
               //color selection
               cy.wrap($body).find(".transparent").click()
               cy.wrap($body).find("[title='\#E67E23']").click()
               cy.wrap($body).find(".blockbuilder-options-content.bootstrap .display-color").click()
               //Interecepting for response
               cy.intercept('POST', 'https://api.events.unlayer.com/save').as('myWork');
               //Click on the button
               cy.contains("Save Design").click();
               //Response assertion
               cy.wait('@myWork').then(({ response }) => {
                    expect(response.statusCode).to.eq(200)
               })

          })
     })

})