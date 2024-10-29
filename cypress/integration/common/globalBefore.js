before(() => {
  cy.log(
    "This will run once before all tests, you can use this to for example start up your server, if that's your thing"
  );

  // create a single stub we will use
  // const stub = cy.stub().as('open')
  // cy.on('window:before:load', (win) => {
  //   cy.stub(win, 'open').callsFake(stub)
  // })

});
