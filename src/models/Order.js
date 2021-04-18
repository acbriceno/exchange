'use strict'

const { MongoDataSource } = require('./../datasource')

class Order extends MongoDataSource {
  initialize () {
    super.initialize()
  }
  
  async createObjDBPayload(args){
  	const order = {
  		userID: args.userID,
  		payingCurrencyID: args.payingCurrencyID,
  		payingCurrencyAmount: args.payingCurrencyAmount,
  		receivingCurrencyID: args.receivingCurrencyID,
  		receivingCurrencyAmount: args.receivingCurrencyAmount,
  		status: args.status,
  		type: args.order
  	}
  	return order
  }
  
  
  async createObjGQLPayload(args){
  	const order = {
	  	id: args._id,
	  	userID: args.userID,
		payingCurrencyID: args.payingCurrencyID,
		payingCurrencyAmount: args.payingCurrencyAmount,
		receivingCurrencyID: args.receivingCurrencyID,
		receivingCurrencyAmount: args.receivingCurrencyAmount,
		status: args.status,
		type: args.order
  	}
  	return order
  }
  
}

module.exports = Order
