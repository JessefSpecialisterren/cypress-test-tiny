/// <reference types="cypress" />
describe('page', () => {
  it('all li elements have text "foo"', () => {
    cy.visit('cypress/integration/index.html')
    cy.get('li').should(($lis) => {
      $lis.each((_, element) => {
        expect(element.textContent).to.equal('foo')
      })
    })
  })
})
