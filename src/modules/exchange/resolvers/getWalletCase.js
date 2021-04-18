'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const getWalletCase = async (parent, args, context, info) => {
  try {
  		const user = await context.user
		const walletcase = await DBGQLConnector.dbFindWithTag("WALLETCASE","userID" ,user.user._id, context)
		console.log(walletcase)
		return walletcase
  } catch (error) {
    console.error(error)
  }
}
module.exports = getWalletCase
