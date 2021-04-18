'use strict'

const { gql } = require('apollo-server-express')

const typeDefs = gql`
  
  extend type Query {
  getWalletCase: WalletCase!
  getCurrencies: [Currency]
  getTransactions: [Transaction]
  }

`

module.exports = {
  typeDefs
}
