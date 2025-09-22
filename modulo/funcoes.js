/***************************************************************************************************************************
 * Objetivo: arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Luana M. Lopes Bomfim
 * Versão: 1.0
 ****************************************************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: "Luana M. Lopes Bomfim" }

//import do arquivo "estados_cidades"
const dados = require('./estados_cidades.js')


//retorna todos os estados
const getAllEstados = function () {
    //mensagem padrão de retorno (cabeçalho)
    let message = {
        status: true,
        status_code: 200,
        development: "Luana M. Lopes Bomfim",
        uf: []
    }

    //percorrrendo o array de estados e selecionando apenas as siglas com o forEach e adicionando ao atributo (array) uf
    dados.listaDeEstados.estados.forEach(function (item) {
        //usa o push, método de array
        message.uf.push(item.sigla)
    })

    //para adicionar um elemento novo do JSON: 
    //criando o atributo "quantidade" e atribuindo o valor do tamanho do array "uf"
    message.quantidade = message.uf.length

    //para remover um atributo do JSON
    //delete message.status 

    //tratativa de erro
    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}


//retorna um estado pesquisando pela sigla 
const getEstadoBySigla = function (sigla) {

    //mensagem padrão de retorno (cabeçalho)
    let message = {
        status: true,
        status_code: 200,
        development: "Luana M. Lopes Bomfim",
    }


    let estado = dados.listaDeEstados.estados.find(function (item) {
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.nome = estado.nome
    message.capital = estado.capital
    message.regiao = estado.regiao

    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)

}

//retorna a Capital referente a um estado pesquisando pela sigla 
const getCapitalBySigla = function (sigla) {

    //mensagem padrão de retorno (cabeçalho)
    let message = {
        status: true,
        status_code: 200,
        development: "Luana M. Lopes Bomfim",
    }

    let estado = dados.listaDeEstados.estados.find(function (item) {
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.descricao = estado.nome
    message.capital = estado.capital

    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)

}

//retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function (regiao) {

    //mensagem padrão de retorno (cabeçalho)
    let message = {
        status: true,
        status_code: 200,
        development: "Luana M. Lopes Bomfim",
        regiao: '',
        estados: []
    }

    dados.listaDeEstados.estados.forEach(function (item) {

        if (item.regiao.toLowerCase() === regiao.toLowerCase())
            message.estados.push({ uf: item.nome, descricao: item.nome })
    })

    message.regiao = regiao.toUpperCase()

    if (message.estados.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}


//retorna uma lista de estados referente às capitais do país
const getVerifyCapitaisDoPais = function () {
        //mensagem padrão de retorno (cabeçalho)
        let message = {
            status: true,
            status_code: 200,
            development: "Luana M. Lopes Bomfim",
            capitais: []
        }

        message.capitais = dados.listaDeEstados.estados.filter(
            (item) => item.capital_pais
        )
    
       console.log(message)
    if (message.capitais.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
    }
    

//retorna uma lita de cidaes pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {

    //mensagem padrão de retorno (cabeçalho)
    let message = {
        status: true,
        status_code: 200,
        development: "Luana M. Lopes Bomfim",
    }

    let estado = dados.listaDeEstados.estados.find(function (item) {
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.descricao = estado.nome
    message.quantidade_cidades = estado.cidades.length
    message.cidades = estado.cidades.map(cidades => cidades.nome)

    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}


//getEstadoBySigla('mg')
//getCapitalBySigla('rj')
//getCidadesBySigla('ac')
//getEstadosByRegiao('sul')
getVerifyCapitaisDoPais()

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getCidadesBySigla
}