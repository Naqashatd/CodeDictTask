class Slider {
    getSlider() {

        cy.get('[data-testid="FiberManualRecordIcon"]').first().click()
        cy.getBySel('slider-text').first().should('have.text', 'Get access to education & fresh, affordable nutritious food delivered to your home for FREE')
        cy.get('[data-testid="FiberManualRecordIcon"]').eq(1).click()
        cy.getBySel('slider-text').eq(1).should('have.text', 'Redeem food benefits and receive free, nutritious food delivered to your door.')
        cy.get('[data-testid="FiberManualRecordIcon"]').eq(2).click()
        cy.getBySel('slider-text').eq(2).should('have.text', 'Purchase fresh, healthy food and earn bonus items with every order.')
        cy.get('[data-testid="FiberManualRecordIcon"]').eq(3).click()
        cy.getBySel('slider-text').eq(3).should('have.text', 'Access easy-to-follow recipes and learn how specific foods can improve your health.')

    }
}
export default Slider;
