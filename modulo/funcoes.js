/***************************************************************************************************************************
 * Objetivo: arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Luana M. Lopes Bomfim
 * Versão: 1.0
 ****************************************************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: "Luana M. Lopes Bomfim" }

const dados = require('./estados_cidades.js')

//retorna todos os estados
const getAllEstados = function () {
    //mensagem padrão de retorno
    let message = {
        status: true,
        status_code: 200,
        development: "Luana M. Lopes Bomfim",
        uf: []
    }

    //selecionando apenas as siglas com o forEach e adicionando ao atributo (array) uf
    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })

    //criando o atributo "quantidade" e atribuindo o valor do tamanho do array "uf"
    message.quantidade = message.uf.length

    //tratativa de erro
    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}


//retorna um estado pesquisando pela sigla 
const getEstadoBySigla = function (sigla) {

}

//retorna a Capital referente a um estado pesquisando pela sigla 
const getCapitalBySigla = function (sigla) {

}


//retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function (regiao) {

}


//retorna uma lista de estados referente às capitais do país
const getVerifyCapitaisDoPais = function () {

}

//retorna uma lita de cidaes pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {

}

//console.log(getAllEstados())
module.exports = {
    getAllEstados
}