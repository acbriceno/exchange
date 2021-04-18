'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const completeDeposit = async (parent, args, context, info) => {
  try {
  		
    	console.log(args)

    	const transaction = await DBGQLConnector.dbFindWithTag("TRANSACTION","_id", ObjectID(args.transactionID), context)
    		console.log(transaction)
    	let walletCase = await DBGQLConnector.dbFindWithTag("WALLETCASE","userID",transaction.userID, context)
    
    	console.log(walletCase)
	
	   		for (let i = 0; i < walletCase.wallets.length; i++) {
				if(walletCase.wallets[i].currency == transaction.currencyID){
					walletCase.wallets[i].unavailableAmount = walletCase.wallets[i].unavailableAmount - transaction.amount
					walletCase.wallets[i].balance = walletCase.wallets[i].balance + transaction.amount
				}
			} 
			let payload = {
				wallets: walletCase.wallets
			}
			const walletUpdate = await DBGQLConnector.dbUpdateOne("WALLETCASE", "userID", transaction.userID, payload, context)
			
			let transactionPayload={status: "COMPLETE"}
			
			const completedDeposit = await DBGQLConnector.dbUpdateOne("TRANSACTION", "_id", ObjectID(args.transactionID), transactionPayload, context)
			
			if(completedDeposit !=null) {return true}
			return false
	  
  } catch (error) {
    console.error(error)
  }
}
module.exports = completeDeposit
