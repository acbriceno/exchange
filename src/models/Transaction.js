'use strict'

const { MongoDataSource } = require('./../datasource')

class Transaction extends MongoDataSource {
  initialize () {
    super.initialize()
  }
  
  async createObjDBPayload(args){
  	const transaction = {
  		userID: args.userID,
  		currencyID: args.currencyID,
  		amount: args.amount,
  		status: args.status,
  		type: args.type
  	}
  	
  	return transaction
  }
  
  async createObjGQLPayload(args){
  	const transaction = {
  		id: args._id,
  		userID: args.userID,
  		currencyID: args.currencyID,
  		amount: args.amount,
  		status: args.status,
  		type: args.type
  	}
  	return transaction
  }
}

module.exports = Transaction
