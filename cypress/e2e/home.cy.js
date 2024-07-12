describe('Home page',()=>{
    it('Check Input Field',()=>{
        cy.visit('/');
        cy.get('input').type('Cindrella')
        cy.get('button').should('be.visible')
        cy.get('button').click();
        cy.contains('Welcome,Cindrella')
        cy.get('input').should('have.value','Cindrella')
    })
})