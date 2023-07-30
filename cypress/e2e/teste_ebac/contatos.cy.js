/// <reference types="cypress" />

describe("Testando o site", () => {

    beforeEach(() =>  cy.visit("https://agenda-contatos-react.vercel.app/"))

    it("Adicionando um novo contato", () => {
       cy.get('input[type="text"]').type("Victor Silva")
       cy.get('input[type="email"]').type("victorsilva@teste.com")
       cy.get('input[type="tel"]').type("1178952655385")
       cy.get('.adicionar').click()
       cy.get('.contato').should('have.length.above', 3)
    })

    it("Editando um contato", () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').type(" editado")
        cy.get('.alterar').click()
        cy.get('.contato').should('have.length.above', 3)
    })

    it("Deletando um contato", () => {
        cy.get('.delete').last().click()
        cy.get('.contato').should('have.length', 3)
    })
})