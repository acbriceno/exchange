'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const createWalletCase = async (parent, args, context, info) => {
  try {
   const user = await context.user
   let walletcase
  	const currencies =  await DBGQLConnector.dbToGqlFind("CURRENCY", [], context)
	await Promise.all(currencies).then((currency) => {
 	  walletcase =  DBGQLConnector.createDBObj("WALLETCASE", {
    	userID: user.user._id,
		currency: currency
    }, context)
    
   
	})
    if(walletcase !=null) {return true}
    return false
  } catch (error) {
    console.error(error)
  }
}
module.exports = createWalletCase
