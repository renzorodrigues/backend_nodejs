const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//carrega os Models
const Product = require('./models/product')
const Customer = require('./models/customer')

//carrega as Rotas
const indexRoute = require('./routes/index-route')
const productsRoute = require('./routes/product-route')
const customersRoute = require('./routes/customer-route')

//conecta com o Banco
mongoose.connect(
  'mongodb+srv://mydb:mydb123@cluster0-efk9o.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/products', productsRoute)
app.use('/customers', customersRoute)

module.exports = app