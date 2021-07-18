const express = require('express')
// Importando 'express'
const route = require('./route')
const path = require('path')

const server = express()
// Cria server, que é o 'express' iniciado

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log("Primeira linha em node rodando"))
// 'listen' é uma funcionalidade do 'express'
// Inicia servidor do 'node' rodando numa porta 
// no caso a porta é a '3000'