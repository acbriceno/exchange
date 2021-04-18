'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const getCurrencies = async (parent, args, context, info) => {
  try {
		const currencies = await DBGQLConnector.dbToGqlFind("CURRENCY", [], context)
		console.log(currencies)
		return currencies
  } catch (error) {
    console.error(error)
  }
}
module.exports = getCurrencies
