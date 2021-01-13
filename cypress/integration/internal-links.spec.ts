describe('Internal links navigation', () => {
  before(() => {
    cy.visit('/')
  })

  it('includes a link back home', () => {
    cy.get(`a[href="/"]`).should('exist').click()
  })

  it('includes a link to about me page', () => {
    const aboutMeLink = '/about-me'
    cy.get(`a[href*="${aboutMeLink}"]`).should('exist').click()
  })

  it.skip('includes blog link', () => {
    // TODO: This page is being refactored. Turned off until thats completed.
    const blogPostLink = '/blog'

    cy.get(`a[href*="${blogPostLink}"]`).should('exist').click()
  })
})
