const { gql } = require('apollo-server-express')

const typeDefs = gql`

extend type Mutation {
  deposit (
    amount: Float!
    currencyID: String!
  ): Boolean 

  withdraw (
  	amount: Float!
  	currencyID: String!

  ): Boolean
  
  placeOrder(
  	payingCurrencyID: String!
  	payingCurrencyAmount: Float!
  	receivingCurrencyID: String!
  	receivingCurrencyAmount: Float!
  	type: OrderType!
  ): Boolean
  
  createCurrency(
  	name: String!
  	type: CurrencyType!
  ):Boolean
  
  createWalletCase: Boolean
  
  cancelDeposit(transactionID: String): Boolean
  cancelWithdrawal(transactionID: String): Boolean
  completeDeposit(transactionID: String) : Boolean
  completeWithdrawal(transactionID: String): Boolean 
}
`

module.exports = {
  typeDefs
}
