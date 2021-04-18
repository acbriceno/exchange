'use  strict'
const Users = require('./User')
const SecurityQAs = require('./SecurityQA')
const WalletCase = require('./WalletCase')
const Currency = require('./Currency')
const Transaction = require('./Transaction')
const Order = require('./Order')

const  models = {
  users: Users,
  securityqas: SecurityQAs,
  walletcase: WalletCase,
  currency: Currency,
  transaction: Transaction,
  order: Order

}
module.exports = models
