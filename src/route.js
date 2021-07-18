const express = require('express')

const route =   express.Router()
// 'route' guarda as funcionalidades de rota que o 'express' possui

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))
// req = requisição
// res = resposta

module.exports = route