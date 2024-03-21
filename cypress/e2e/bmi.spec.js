describe('BMI Rechner', () => {
    it('berechnet den BMI korrekt', () => {
      cy.visit('http://localhost:5500'); // Stellen Sie sicher, dass die URL korrekt ist
  
      cy.get('#weight').type('70');
      cy.get('#height').type('170');
      cy.get('#calculateBtn').click();
  
      cy.get('#result').should('contain', 'Ihr BMI beträgt: 24.22'); // Ersetzen Sie den erwarteten BMI-Wert entsprechend Ihrer Berechnung
    });
  });
  