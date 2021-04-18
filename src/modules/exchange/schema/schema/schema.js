const { gql } = require('apollo-server-express')

const typeDefs = gql`

type WalletCase{
	id: ID!
	userID: ID!
	wallets: [Wallet]
}

type Wallet{
	name: String!
	currency: ID!
	balance: Float!
	unavailableAmount: Float!
}

enum CurrencyType{
	FIAT
	CRYPTO
}

type Currency{
	id: ID!
	name: String!
	type: CurrencyType!
}

enum OrderStatus {
	OPEN
	FILLED
	CANCELLED
}

enum OrderType{
	MARKET
	LIMIT
}

type Order{
	id: ID!
	userID: ID!
	payingCurrencyID: ID!
	payingCurrencyAmount: Float!
	receivingCurrencyID: ID!
	receivingCurrencyAmount: ID!
	status: OrderStatus!
	type: OrderType!
}

enum TransactionStatus{
	PENDING
	CANCELLED
	COMPLETE
}

enum TransactionType{
	TRADE
	DEPOSIT
	WITHDRAWAL
}

type Transaction{
	id: ID!
	userID: ID!
	currencyID: ID!
	amount: Float!
	status: TransactionStatus!
	type: TransactionType!
}




type TransactionHistory{
	id: ID!
	userID: User!
	orders: [Order]
	deposits: [Transaction]
	withdrawals: [Transaction]
}


	

`
// console.log(typeDefs)
module.exports = typeDefs
