import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'
import { ApolloServer } from 'apollo-server'
import { createContext } from './context'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
