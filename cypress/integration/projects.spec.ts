describe('Projects page', () => {
  before(() => {
    cy.visit('/projects')
  })

  it('links to all professional projects', () => {
    cy.get(`a[href="https://www.pluralsight.com/product/channels"]`).should('exist')
    cy.get(`a[href="https://help.pluralsight.com/help/analytics"]`).should('exist')
    cy.get(`a[href="https://play.aidungeon.io/main/landing"]`).should('exist')
    cy.get(`a[href="https://www.visiblescm.com/fulfillment/"]`).should('exist')
    cy.get(
      `a[href="https://web.archive.org/web/20150820072637/http://www.integracore.com/"]`
    ).should('exist')
  })

  it('links to all hobby projects', () => {
    cy.get(`a[href="https://github.com/jimboslicethat/folio"]`).should('exist')
    cy.get(`a[href="https://github.com/pluralsight/git-collaborate"]`).should('exist')
    cy.get(`a[href="https://github.com/jimboslicethat/nest-electron-widget"]`).should('exist')
    cy.get(`a[href="https://hub.docker.com/r/jimboslicethat/sbt"]`).should('exist')
    cy.get(`a[href="https://github.com/domenic/sinon-chai/issues/93"]`).should('exist')
  })

  it('opens all project details', () => {
    cy.get('ul>li>div>span').each($el => {
      cy.wrap($el).click()
    })
  })
})
