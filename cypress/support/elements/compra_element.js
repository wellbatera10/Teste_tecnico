class test_element{
    InputText_pesquisar = () => {return '#twotabsearchtextbox'}
    Produto = () => {return 'Meia'}
    Acessar_login = () => {return '#nav-link-accountList-nav-line-1' }
    Usuario = () => {return "#ap_email" }
    Senha = () => {return "#ap_password"}
    btn_fazer_login = () => {return '#signInSubmit'}
    btn_continue = () => {return '#continue'}
    btn_pesquisar = () => {return '#nav-search-submit-button'}
    btn_adicionar_carrinho = () => {return '#add-to-cart-button'}
    txt_carrinho_adicionado = () => {return 'Adicionado ao carrinho'}
    btn_Fechar_pedido = () => {return '#sc-buy-box-ptc-button > .a-button-inner > .a-button-input'}
    txt_Enviar_para_endereço = () => {return '[data-testid="Address_selectShipToThisAddress"]'}
    selecionar_metodo_boleto = () => {return '.pmts-boleto-icon-img'}
    btn_forma_pagamento = () => {return 'Usar esta forma de pagamento'}
    Finalizar_pedido = () => {return '#bottomSubmitOrderButtonId > .a-button-inner > [data-testid]'}
    txt_pedido_gerado = () => {return 'Obrigado, Seu pedido foi feito e será processado após o pagamento do Boleto'}
}
export default test_element;