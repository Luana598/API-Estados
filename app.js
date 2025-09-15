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
    next() //Próximo; carregar os próximos endpoints
})

//ENDPOINTS

app.get('/v1/estados', function(request, response){
    
})






































































































