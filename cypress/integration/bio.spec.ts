describe('Bio page', () => {
  before(() => {
    cy.visit('/bio')
  })

  it('contains all biography sections', () => {
    cy.contains('What I Care About').should('exist')
    cy.contains('Skills / Expertise').should('exist')
    cy.contains('Hobbies & Interests').should('exist')
  })
})
