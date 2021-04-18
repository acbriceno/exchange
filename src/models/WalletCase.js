'use strict'

const { MongoDataSource } = require('./../datasource')

class WalletCase extends MongoDataSource {
  initialize () {
    super.initialize()
  }
  
  async createObjDBPayload(args){
  
   let walletCase = {
	  	userID: args.userID,
	  	wallets: []
	  }

		var i;
		for (i = 0; i < args.currency.length; i++) {
		  console.log(args.currency[i])
		  let currency = args.currency[i]
		  walletCase.wallets.push(this.createWalletObjDBPayload(currency))
		} 
			   
	   
	  	// 
	  
	  
	 
	  
	  return walletCase

  	
	 
  
  }
  
  async createObjGQLPayload (args){
  	
  	let walletCase = {
  		userID: args.userID,
  		id: args._id,
  		wallets: args.wallets
  	}
  	return walletCase
  }
  
   createWalletObjDBPayload(args){

   
  	let wallet = {
  		name: args.name,
  		currency: args.id,
  		balance:0,
  		unavailableAmount: 0
  	
  	}
  	
  	return wallet
   
  }
  
  async createWalletObjGQLPayload(args){
  		let wallet = {
	  		id: args._id,
	  		name: args.name,
	  		balance: args.balance,
	  		unavailableAmount: args.unavailableAmount		
	  	
  		}
  		return wallet		
  }
  
  	
}

module.exports = WalletCase
