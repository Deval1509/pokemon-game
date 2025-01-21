describe('Pokemon App end to end Test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('body').then(($body) => {
          cy.log($body.html());
        });
    })

    it('Logs the root content', () => {
        cy.get('#root').then(($root) => {
          cy.log($root.html());
        });
      });

    
    it('Checks header title is visible', () => {
        cy.get('title').should('contain.text', 'Guess the Pokemon!');

        cy.get('body').then(($body) => {
            cy.log($body.html());
        });
    });

    // Test if the page is visible
    it('Loads the game successfully', () => {
        cy.get('header h1 span', { timeout: 10000 }).should('contain.text', 'Who that Pokemon?');
        cy.contains('Score:').should('be.visible');
        cy.contains('Reset').should('be.visible');
    })

    // Start the game and check the response
    it('Starts the game and displays Image', () => {
        cy.get('button').contains('Start').click();
        cy.get('button').contains(/Option/i).should('have.length', 4);
        cy.get('button').contains(/Option/i).first().click();
        cy.contains(/Correct|Wrong!/).should('be.visible');
    })

    // If the Response is incorrect check furthurmore
    it('Handles incorrect answer', () => {
        cy.get('button').contains('Start').click();
        cy.get('button').contains(/Option/i).should('have.length', 4);
        cy.get('button').contains(/Option/i).last().click();
        cy.contains(/Correct|Wrong/).should('be.visible')
    })

        // If the Response is incorrect check furthurmore
    it('Handles correct answer', () => {
        cy.get('button').contains('Start').click();
        cy.get('button').contains(/Option/i).should('have.length', 4);
        cy.get('button').contains(/Option/i).first().click();
        cy.contains(/Correct|Wrong/).should('be.visible')
    })

    it('Resets the score', () => {
        cy.get('button').contains('Start').click();
        cy.get('button').contains(/Option/i).first().click();

        // Verify the increment of the score
        cy.contains('Score:').then(($score) => {
            const intialScore = parseInt($score.text().split(':')[1].trim(), 10);
            cy.contains('Correct!').should('be.visible');
            cy.contains('Score:').should('contain.text', intialScore + 1)
        })

        cy.get('button').contains('Reset').click();
        cy.contains('Score:0').should('be.visible')
        cy.contains('Score has been reset.').should('be.visible')
    })
})