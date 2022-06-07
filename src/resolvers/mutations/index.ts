import { cartResolvers } from './cart'
import { userResolvers } from './user'

export const Mutation = {
  ...userResolvers,
  ...cartResolvers,
}
