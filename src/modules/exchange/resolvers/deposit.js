'use strict'

const DBGQLConnector = require('../../../utils/DBGQLConnector')
const ObjectID = require('mongodb').ObjectID
const deposit = async (parent, args, context, info) => {
  try {
  		const user = await context.user
    	const deposit = await DBGQLConnector.createDBObj("TRANSACTION", {
    		userID: user.user._id,
    		currencyID: args.currencyID,
    		amount: args.amount,
    		type: "DEPOSIT",
    		status: "PENDING"
    	}, context)
    	
    	let walletCase = await DBGQLConnector.dbFindWithTag("WALLETCASE","userID", user.user._id, context)
    
   		for (let i = 0; i < walletCase.wallets.length; i++) {
			if(walletCase.wallets[i].currency == args.currencyID){
				walletCase.wallets[i].unavailableAmount += args.amount
			}
		} 
		let payload = {
    		wallets: walletCase.wallets
    	}
			 
		
		
    	
    	
    	const unavailableAmountUpdate = await DBGQLConnector.dbUpdateOne("WALLETCASE", "userID", user.user._id, payload, context)
    	
    	if(deposit !=null) {return true}
    	return false
  } catch (error) {
    console.error(error)
  }
}
module.exports = deposit
