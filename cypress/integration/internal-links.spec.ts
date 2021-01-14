describe('Internal links navigation', () => {
  before(() => {
    cy.visit('/')
  })

  it('includes a link back home', () => {
    cy.get(`a[href="/"]`).should('exist').click()
  })

  it('includes blog link', () => {
    const blogPostLink = '/blog'

    cy.get(`a[href*="${blogPostLink}"]`).should('exist').click()
  })
})
