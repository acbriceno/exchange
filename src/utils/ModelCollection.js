'use strict'

const modelCollection = {

  CURRENCY: 1,
  WALLETCASE: 2,
  ORDER: 3,
  TRANSACTION: 4,
  OPERATORROUTE: 5,
  USER: 6,
  SECURITYQA: 7,
  properties: {
    1: { name: 'CURRENCY', value: 1, code: 'CURRENCY', collection: 'currency' },
    2: { name: 'WALLETCASE', value: 2, code: 'WALLETCASE', collection: 'walletcase' },
    3: { name: 'ORDER', value: 3, code: 'ORDER', collection: 'order' },
    4: { name: 'TRANSACTION', value: 4, code: 'TRANSACTION', collection: 'transaction' },
    5: { name: 'OPERATORROUTE', value: 5, code: 'OPERATORROUTE', collection: 'operatorRoutes' },
    6: { name: 'USER', value: 6, code: 'USER', collection: 'users' },
    7: { name: 'SECURITYQA', value: 7, code: 'SECURITYQA', collection: 'securityqas' }


  }

}
module.exports = modelCollection
