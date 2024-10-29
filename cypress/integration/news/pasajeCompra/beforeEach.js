beforeEach(() => {
  cy.log(
    "This will run before every scenario of Google.feature test, but NEVER for Facebook/Google feature files"
  );

   // create a single stub we will use
  //  const stub = cy.stub().as('open')
  //  cy.on('window:before:load', (win) => {
  //    cy.stub(win, 'open').callsFake(stub)
  //  })
});

