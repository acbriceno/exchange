'use strict'
const makeExecutableSchemaFromModules = require('../utils/modules')

const auth = require('./auth')
const exchange = require('./exchange')
module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    exchange
  ]
})
