/// <reference types="Cypress"/>
const ambiente = Cypress.config("baseUrl")
import test_element from "../elements/compra_element"
const element = new test_element


class Compra{

   Acesssar_Site(){
       cy.visit(ambiente)
   }

   Login(){
       cy.get(element.Acessar_login()).should('be.visible').click()
       cy.get(element.Usuario()).type('scan.teste.2019@gmail.com')
       cy.get(element.btn_continue()).should('be.visible').click()
       cy.get(element.Senha()).should('be.visible').type('Scansource2022')
       cy.get(element.btn_fazer_login()).should('be.visible').click()
   }

   Preencher_campo_pesquisar(){
       cy.get(element.InputText_pesquisar()).should('be.visible').type('Nike')
       cy.get(element.btn_pesquisar()).should('be.visible').click()
   }

   Selecionar_produto(){
       cy.contains(element.Produto()).should('be.visible').click()
   }   

   Adicionar_carrinho(){
    cy.xpath('//*[@id="size_name_0"]/span/input').click()
    cy.wait(2000)
    cy.get(element.btn_adicionar_carrinho()).should('be.visible').click()
    cy.wait(1000)
   }

   Validar_Carrinho(){
       cy.contains(element.txt_carrinho_adicionado()).should('be.visible')
   }

   Encaminhar_pedido(){
    cy.get(element.btn_Fechar_pedido()).should('be.visible').click()
    cy.get(element.txt_Enviar_para_endereço()).should('be.visible').click()
    cy.wait(8000)       
    cy.get(element.selecionar_metodo_boleto()).click()
    cy.contains(element.btn_forma_pagamento()).should('be.visible').click({force:true})
   }

   Finalizar_pedido(){
       cy.wait(2000)
       cy.get(element.Finalizar_pedido()).should('be.visible').click()
   }

   Validar_mensagem_boleto(){
       cy.contains(element.txt_pedido_gerado()).should('be.visible')
   }

}
export default Compra