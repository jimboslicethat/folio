describe('Blog page', () => {
  before(() => {
    cy.visit('/blog')
  })

  it('links out to all blog posts', () => {
    const devToBaseUrl = 'https://dev.to/jimboslicethat'

    cy.get('ul>li>a').each($el => {
      cy.wrap($el).should('have.prop', 'href').and('include', devToBaseUrl)
    })
  })
})
