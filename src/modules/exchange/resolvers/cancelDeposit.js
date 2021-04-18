'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const cancelDeposit = async (parent, args, context, info) => {
  try {
  		
    	console.log(args)

    	const transaction = await DBGQLConnector.dbFindWithTag("TRANSACTION","_id", ObjectID(args.transactionID), context)
    	let walletCase = await DBGQLConnector.dbFindWithTag("WALLETCASE","userID",transaction.userID, context)
    	console.log(transaction)
    	console.log(walletCase)
	
	   		for (let i = 0; i < walletCase.wallets.length; i++) {
				if(walletCase.wallets[i].currency == transaction.currencyID){
					walletCase.wallets[i].unavailableAmount = walletCase.wallets[i].unavailableAmount - transaction.amount
				}
			} 
			let payload = {
				wallets: walletCase.wallets
			}
			const unavailableAmountUpdate = await DBGQLConnector.dbUpdateOne("WALLETCASE", "userID", transaction.userID, payload, context)
			
			let transactionPayload={status: "CANCELLED"}
			
			const cancelledDeposit = await DBGQLConnector.dbUpdateOne("TRANSACTION", "_id", ObjectID(args.transactionID), transactionPayload, 			context)
			
			if(cancelledDeposit !=null) {return true}
			return false
	  
  } catch (error) {
    console.error(error)
  }
}
module.exports = cancelDeposit
