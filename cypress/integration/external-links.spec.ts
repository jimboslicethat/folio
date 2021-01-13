describe('External links navigation', () => {
  before(() => {
    cy.visit('/')
  })

  it('includes github link', () => {
    const githubLink = 'https://github.com/jimboslicethat'

    cy.get(`a[href*="${githubLink}"]`).should('exist')
  })

  it('includes linkedin link', () => {
    const linkedinLink = 'https://www.linkedin.com/in/jamesandersonwalsh/'

    cy.get(`a[href*="${linkedinLink}"]`).should('exist')
  })

  it('includes twitter link', () => {
    const twitterLink = 'https://twitter.com/jimboslicethat'

    cy.get(`a[href*="${twitterLink}"]`).should('exist')
  })
})
