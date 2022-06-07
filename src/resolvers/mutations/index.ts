import { cartResolvers } from './cart'
import { orderResolvers } from './order'
import { userResolvers } from './user'

export const Mutation = {
  ...userResolvers,
  ...cartResolvers,
  ...orderResolvers,
}
