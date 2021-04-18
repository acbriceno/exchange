'use strict'

const { MongoDataSource } = require('./../datasource')

class Currency extends MongoDataSource {
  initialize () {
    super.initialize()
  }
  
  async createObjDBPayload(args){
  	const currency = {
  		name: args.name,
  		type: args.type
  	}
  	return currency
  }
  
  async createObjGQLPayload(args){
  	const currency = {
  		id: args._id,
  		name: args.name,
  		type: args.type
 	}
 	return currency
  }
  
}

module.exports = Currency
