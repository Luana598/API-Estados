/***************************************************************************************************************************
 * Objetivo: arquivo de endPoints referente a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Luana M. Lopes Bomfim
 * Versão: 1.0
 * 
 * Obs: Instalação do Express, Cors, Body-Parser
 * npm install express --save 
 * npm cors express --save 
 * npm install body-parser --save 
 * comando npm i: baixa localmente as dependências do node_modules 
 ****************************************************************************************************************************/

//dependências da API
const express    = require('express')    //Responsável pela API
const cors       = require('cors')       //Responsável pelas permissões da API (APP)  
const bodyParser = require('body-parser')//Responsável por gerenciar a chegada dos dados da API com o front-end

//import do arquivo de funções
const dados = require('./modulo/funcoes.js')

//retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080


//criando uma instância de uma classe do express
const app = express()

//configuração de permissões da API 
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*') //servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET')//verbos permitidos na API
    //carrega as configurações no cors da API
    app.use(cors())

    next() //Próximo; carregar os próximos endpoints USO OBRIGATÓRIO
})

//uso do request -> chegada de dados na API
//uso do response -> retorno de dados na API


//ENDPOINTS
app.get('/v1/estados', function(request, response){

    //Pesquisa na função de estados
    let estados = dados.getAllEstados()

    //retorna o status code
    response.status(estados.status_code)
    //retorna o JSON
    response.json(estados)
})


//endpoint com o parâmetro de UF para a função 2
app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    
    let estado = dados.getEstadoBySigla(sigla)

      //retorna o status code
      response.status(estado.status_code)
      //retorna o JSON
      response.json(estado)
})


//endpoint com o parâmetro de UF para a função 3
app.get('/v1/capital/:uf', function(request, response){
    let sigla = request.params.uf
    
    let capital = dados.getCapitalBySigla(sigla)

      //retorna o status code
      response.status(capital.status_code)
      //retorna o JSON
      response.json(capital)
})

//endpoint com o parâmetro de UF para a função 4
app.get('/v1/estados/:regiao', function(request, response){
    let regiao = request.params.regiao
    
    let estados = dados.getEstadosByRegiao(regiao)

      //retorna o status code
      response.status(estados.status_code)
      //retorna o JSON
      response.json(estados)
})

//endpoint com o parâmetro de UF para a função 6
app.get('/v1/cidades/:uf', function(request, response){
    let sigla = request.params.uf
    
    let cidades = dados.getCidadesBySigla(sigla)

      //retorna o status code
      response.status(cidades.status_code)
      //retorna o JSON
      response.json(cidades)
})


// app.get('/v1/estados/regiao/:id', function(request, response){
//     let sigla = request.query.uf
//     let estado = request.query.estado
//     let regiao = request.query.regiao
//     let id = request.params.id

//     console.log(sigla)
//     console.log(estado)
//     console.log(regiao)
//     console.log(id)
// })

//Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições...')
})




































































































