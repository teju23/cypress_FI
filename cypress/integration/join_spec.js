describe("join in as a Founder", () => {
  it("join as founder with correct credentials", () => {
    let first_name = "First Name";
    let last_name = "Last Name";
    let email = "new_joining_user_123@gmail.com";
    let password = "secret123";
    cy.server();
    cy.visit('/');
    cy.contains('Join').click();
    cy.get('#first_name').type(first_name).should('have.value',first_name);
    cy.get('#last_name').type(last_name).should('have.value', last_name);
    cy.get('#email_address').type(email).should('have.value',email);
    cy.get("#password").type(password).should('have.value', password);
    cy.get('.select').select("Meetup")
  })
});