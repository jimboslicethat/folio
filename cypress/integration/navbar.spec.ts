describe('Navbar component', () => {
  before(() => {
    cy.visit('/')
  })

  it('includes a link back home', () => {
    cy.get(`nav a[href="/"]`).should('exist').click()
  })

  it('includes blog link', () => {
    cy.get(`nav a[href*="/blog"]`).first().should('exist').click()
  })

  it('includes bio link', () => {
    cy.get(`nav a[href*="/bio"]`).first().should('exist').click()
  })

  it('includes projects link', () => {
    cy.get(`nav a[href*="/projects"]`).first().should('exist').click()
  })
})
