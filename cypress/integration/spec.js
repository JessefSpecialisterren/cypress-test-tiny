/// <reference types="cypress" />
describe('localStorage', () => {
  it('sets localStorage', () => {
    cy.visit('cypress/integration/setLocalStorage.html')
    cy.get('body').should(() => {
      expect(localStorage.getItem('foo')).to.equal('bar')
    })
  })
  it('clears localStorage between tests', () => {
    cy.visit('cypress/integration/index.html')
    cy.get('body').should(() => {
      expect(localStorage.getItem('foo')).to.be.null
    })
  })
})
