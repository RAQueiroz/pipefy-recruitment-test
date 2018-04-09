describe("Pipefy Form", function() {
  it(".should() - have the typed value", function() {

    cy.visit("http://localhost:3001");
    cy
      .get("#your_name")
      .type("John Doe")
      .should("have.value", "John Doe");

      cy
          .get("#your_bio")
          .type("I am Doe, John Doe")
          .should("have.value", "I am Doe, John Doe");

      cy.get('#primary_skill').select('Functional Programming').should('have.value', 'Functional Programming')

      cy.get('#javascript_library_of_choice [data-testid="radio-0"]').click();
      cy.get('#additional_experience [data-testid="check-0"]').click();
      cy.get('#additional_experience [data-testid="check-1"]').click();
      cy.get('#additional_experience [data-testid="check-2"]').click();

      cy
          .get("#start_date")
          .type("2018-05-05")
          .should("have.value", "2018-05-05");

      cy.get('button').click();

      //Stopped here because the start_date is reset before submit, looks like cypress has some problems with type date on inputs

  });
});
