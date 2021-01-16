describe('Index page', () => {
  before(() => {
    cy.visit('/')
  })

  it('can navigate to projects page', () => {
    cy.get('section:first a')
      .contains('Check out my work')
      .parent()
      .should('have.prop', 'href')
      .and('include', 'localhost:3000/projects')
  })

  it('can navigate to the blog page', () => {
    cy.get('section:first a')
      .contains('Read my blog posts')
      .parent()
      .should('have.prop', 'href')
      .and('include', 'localhost:3000/blog')
  })

  it('can navigate to the bio page', () => {
    cy.get('section:first a')
      .contains('Learn more about me')
      .parent()
      .should('have.prop', 'href')
      .and('include', 'localhost:3000/bio')
  })

  it('can navigate to the contact-me page', () => {
    cy.get('section:first a')
      .contains('Reach out on social')
      .parent()
      .should('have.prop', 'href')
      .and('include', 'localhost:3000/contact-me')
  })
})
