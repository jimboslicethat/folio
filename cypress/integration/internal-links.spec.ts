describe('Internal links navigation', () => {
  before(() => {
    cy.visit('/')
  })

  it('includes a link back home', () => {
    cy.get(`a[href="/"]`).should('exist').click()
  })

  it('includes blog link', () => {
    cy.get(`a[href*="/blog"]`).first().should('exist').click()
  })

  it('includes bio link', () => {
    cy.get(`a[href*="/bio"]`).first().should('exist').click()
  })

  it('includes projects link', () => {
    cy.get(`a[href*="/projects"]`).first().should('exist').click()
  })
})
