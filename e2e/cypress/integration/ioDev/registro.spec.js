/// <reference types="Cypress" />

import { Chance } from "chance";
const chance = new Chance();

describe("Acessar o registro", () => {
  it("Dado que esteja na home", () => {
    cy.visit("/");
  });

  it("Quando acessar o formulário de registro", () => {
    cy.contains("Registre-se").click();
  });

  it("Então deve aparecer o formulário de registro", () => {
    cy.url().should("include", "/registro/usuario");
    cy.contains("Avançar").should("exist");
    cy.contains("Voltar").should("exist");
  });
});

describe("Preencher as informações pesssoais", () => {
  it("Dado que esteja na etapa de Informações pessoais", () => {
    cy.contains("Primeiro, nos conte sobre você...").should("exist");
  });

  it("Quando preencher o nome, então deve verificar seu preenchimento", () => {
    const nome = chance.name();
    cy.contains("Nome").click({ force: true })
    cy.focused().type(nome).should('have.value', nome);
  });

  it("Quando preencher o email, então deve verificar seu preenchimento", () => {
    const email = chance.email({ domain: "iodev.test" });
    cy.contains("E-mail").click({ force: true })
    cy.focused().type(email).should('have.value', email);
  });

  it("Quando preencher o nascimento, então deve verificar seu preenchimento", () => {
    const ano = chance.pickone(["1989", "1993", "1995"]);
    const [nascimento] = chance.date({ year: ano })
      .toISOString()
      .split('T')
      .filter(x => x.includes('-'))
      .map(x => x.split('-').reverse().join('/'))

    cy.get(".p-calendar > .p-inputtext").click({ force: true });
    cy.focused().type(nascimento).should('have.value', nascimento);
  });

  it("Quando preencher o senha, então deve verificar seu preenchimento", () => {
    const senha = chance.string({ symbols: true, numeric: true, alpha: true })
    cy.get("input[type=password]").click({ force: true });
    cy.focused().type(senha).should("have.value", senha);
  });

  it("Quando preencher o endereço, então deve verificar seu preenchimento", () => {
    const endereco = chance.street();
    cy.contains("Endereço").click({ force: true });
    cy.focused().type(endereco).should("have.value", endereco);
  });

  it("Quando preencher o numero, então deve verificar seu preenchimento", () => {
    const numero = chance.string({ pool:'0123456789', length: 3 });
    cy.contains("Número").click({ force: true });
    cy.focused().type(numero).should("have.value", numero);
  });

  it("Quando preencher o complemento, então deve verificar seu preenchimento", () => {
    const complemento = Cypress._.capitalize(chance.word({ syllables: 3 }));
    cy.contains("Complemento").click({ force: true });
    cy.focused().type(complemento).should("have.value", complemento);
  });

  it("Quando preencher o cep, então deve verificar seu preenchimento", () => {
    const cep = chance.string({ numeric: true, length: 8 });
    cy.contains("CEP").click({ force: true });
    cy.focused().type(cep).should("have.value", cep);
  });
  
  it("Avançar para experiências profissionais", () => {
    cy.contains('Avançar').click();
  })
});

describe('Preencher informações profissionais', () => {
  
})