describe('NavBar', () => {
  before(() => {
    cy.visit('/')
  })

  it('includes blog link', () => {
    const blogPostLink = '/blog-posts'

    cy.get(`a[href*="${blogPostLink}"]`).should('exist').click()
  })

  it('includes links link', () => {
    const linksLink = '/links'

    cy.get(`a[href*="${linksLink}"]`).should('exist').click()
  })

  it('includes a link back home', () => {
    cy.get(`a[href="/"]`).should('exist').click()
  })
})
