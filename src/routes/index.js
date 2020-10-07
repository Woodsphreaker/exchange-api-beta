const {Router} = require('express')
const cool = require('cool-ascii-faces');
const routes =  Router()

const ExchangeController = require('../app/controllers/ExchangeController')

routes.get('/', (req, res) => res.send(cool()))
routes.get('/listCurrency', ExchangeController.Index)

module.exports = routes