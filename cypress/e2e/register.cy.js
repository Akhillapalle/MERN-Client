describe('Register Page E@E testing',function(){
    beforeEach( function(){
        cy.fixture('user').then((user)=>{
            this.userData=user;
        });
    });
    it('Testing Register Page Fun',  function(){

        cy.visit('/register');
        cy.get('h1').should('contain','Register Here!');
        cy.get('input[name="name"]').type(this.userData.name);
        cy.get('input[name="email"]').type(this.userData.email);
        cy.get('input[name="password"]').type(this.userData.password);
        cy.get('button[type="submit"]').click({multiple:true});
        cy.contains('Registration Succesfful').should('be.visible');
        cy.log('Reg functionality is working')
    })
})