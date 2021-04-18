'use strict'

const Role = {

  CUSER: 1,
  ADMIN: 2,
  properties: {
    1: { name: 'CUSER', value: 1, code: 'CUSER', collection: 'users' },
    2: { name: 'ADMIN', value: 2, code: 'ADMIN', collection: 'admin' }
  }

}
module.exports = Role
