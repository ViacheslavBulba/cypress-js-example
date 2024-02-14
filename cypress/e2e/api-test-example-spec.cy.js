describe('wikipedia spec', () => {

  it('post request example', () => {
    cy.request({
      url: '/todos',
      method: 'POST',
      body: {
        title: 'Write REST API',
      },
    })
      .its('body')
      .should('deep.contain', {
        title: 'Write REST API',
        completed: false,
      })
  });

  it('ui steps and get request example', () => {
    // drive the application through its UI
    cy.visit('/')
    cy.get('.new-todo')
      .type('write E2E tests{enter}')
      .type('add API tests as needed{enter}')
    // now confirm the server has 2 todo items
    cy.request('/todos')
      .its('body')
      .should('have.length', 2)
      .and((items) => {
        // confirm the returned items
      })
  })

})