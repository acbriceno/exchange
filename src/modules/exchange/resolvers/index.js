'use strict'

const createCurrency = require('./createCurrency')
const getCurrencies = require('./getCurrencies')
const createWalletCase = require('./createWalletCase')
const getWalletCase = require('./getWalletCase')
const deposit = require('./deposit')
const withdraw = require('./withdraw')
const getTransactions = require('./getTransactions')
const cancelDeposit = require('./cancelDeposit')
const completeDeposit = require('./completeDeposit')
const completeWithdrawal = require('./completeWithdrawal')
const cancelWithdrawal = require('./cancelWithdrawal')
const resolvers = {
  Query: {
    getCurrencies,
    getWalletCase,
    getTransactions
  },

  Mutation: {
 	createCurrency,
 	createWalletCase,
 	deposit,
 	withdraw,
 	cancelDeposit,
 	completeDeposit,
 	completeWithdrawal,
 	cancelWithdrawal
  }
}

module.exports = resolvers
