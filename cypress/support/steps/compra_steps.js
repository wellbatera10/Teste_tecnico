/* global Given, When, And, Then*/
import page_compra from "../page/compra_page"
const test = new page_compra

Given(/^que acesso o site da amazon$/, () => {
  test.Acesssar_Site()
  test.Login()
})


When(/^realizo o processo de compra$/, () => {
  test.Preencher_campo_pesquisar()
  test.Selecionar_produto()
  test.Adicionar_carrinho()
  test.Validar_Carrinho()
  test.Encaminhar_pedido()
})

Then(/^verifico o email de confirmação de compra$/, () => {
  test.Finalizar_pedido()
  test.Validar_mensagem_boleto()
})

