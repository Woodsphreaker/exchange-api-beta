const {Router} = require('express')
const routes =  Router()

const ExchangeController = require('../app/controllers/ExchangeController')

routes.get('/listCurrency', ExchangeController.Index)

module.exports = routes