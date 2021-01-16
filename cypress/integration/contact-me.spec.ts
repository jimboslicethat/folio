describe('Contact Me page', () => {
  before(() => {
    cy.visit('/contact-me')
  })

  it('includes links to linkedIn', () => {
    cy.get(`a[href="https://linkedin.com/in/jamesandersonwalsh"]`).should('exist')
  })

  it('links to github', () => {
    cy.get(`a[href="https://github.com/jimboslicethat"]`).should('exist')
  })

  it('links to twitter', () => {
    cy.get(`a[href="https://twitter.com/jimboslicethat"]`).should('exist')
  })

  it('links to email', () => {
    cy.get(`a[href="mailto:jameswalsh@hey.com"]`).should('exist')
  })
})
