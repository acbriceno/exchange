'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const getTransactions = async (parent, args, context, info) => {
  try {
		const transactions = await DBGQLConnector.dbToGqlFind("TRANSACTION", [], context)
		
		return transactions
  } catch (error) {
    console.error(error)
  }
}
module.exports = getTransactions
