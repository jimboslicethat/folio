describe('Index Page', () => {
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

  it('includes dev.to link', () => {
    const devtoLink = 'https://dev.to/jimboslicethat/'

    cy.get(`a[href*="${devtoLink}"]`).should('exist')
  })

  it('includes a mailto link', () => {
    const devtoLink = 'mailto:jamesandersonwalsh@gmail.com'

    cy.get(`a[href*="${devtoLink}"]`).should('exist')
  })
})
