'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const createCurrency = async (parent, args, context, info) => {
  try {
    const currency = await DBGQLConnector.createDBObj("CURRENCY", {
    	name: args.name,
    	type: args.type
    }, context)
    
    if(currency !=null) {return true}
    return false
  } catch (error) {
    console.error(error)
  }
}
module.exports = createCurrency
