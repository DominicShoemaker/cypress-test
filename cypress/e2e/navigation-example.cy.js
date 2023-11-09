/// <reference types="Cypress" />

// documentation: https://docs.cypress.io/guides/core-concepts/variables-and-aliases

describe('navigation example', () => {
    it('read json file and navigate to url from the file', () => {
        cy.readFile('cypress/fixtures/publishinfo.json').then(content =>{
            cy.wrap(content).as("publishInfo")
        })
        cy.get("@publishInfo").then(publisContent => {
            cy.log(publisContent["url"])
            cy.visit(publisContent["url"])
        })
    })
  })