describe('page constructor', function() {
    beforeEach('should be available on localhost:3000', function() {
        cy.visit('http://localhost:3000');
    });
    it('should drag ingredients', () => {
        cy.contains('p', 'булка').trigger('dragstart').first();
        cy.get('[data-cy=list]').trigger('drop');
        cy.contains('p', 'Соус').trigger('dragstart').first();
        cy.get('[data-cy=list]').trigger('drop');
        cy.contains('p', 'Соус').trigger('dragstart').first();
        cy.get('[data-cy=list]').trigger('drop');
        cy.contains('p', 'Биокотлета').trigger('dragstart').first();
        cy.get('[data-cy=list]').trigger('drop');
    });
    it('open and close modal with ingredient', () => {
        cy.contains('p', 'булка').click()
        cy.get('[class^=modal_buttonClose]').click({ multiple: true })
    });
    it('open and close modal with ingredient', () => {
        cy.contains('p', 'булка').click()
        cy.get('[class^=modal-overlay]').click({ multiple: true })
    });
});
