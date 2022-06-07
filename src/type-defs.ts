import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: Date!
  }

  type Token {
    accessToken: String!
    refreshToken: String!
  }

  type Product {
    id: ID!
    name: String!
    category: String!
    description: String!
    image: String!
    price: Int!
    createdAt: Date!
  }

  type CartItem {
    product: Product!
    quantity: Int!
    createdAt: Date!
  }

  type CartResponse {
    totalQuantity: Int!
    totalPrice: Int!
    user: User!
    cartItems: [CartItem!]!
  }

  type OrderItem {
    id: Int!
    product: Product!
    quantity: Int!
    createdAt: Date!
  }

  type OrderResponse {
    totalQuantity: Int!
    totalPrice: Int!
    user: User!
    orderItems: [OrderItem!]!
  }

  type Query {
    users: [User!]!
    me: User
    products(category: String, count: Int): [Product!]!
    product(id: ID!): Product
    cart: CartResponse!
    order: OrderResponse!
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): Token
    login(email: String!, password: String!): Token
    addToCart(productId: ID!): CartItem
    removeFromCart(productId: ID!): Boolean
    deleteCartItem(productId: ID!): Boolean
    createOrder: CartResponse
  }
`
