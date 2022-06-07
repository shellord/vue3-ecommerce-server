import { QueryResolvers } from '@/generated/graphql'

export const Query: QueryResolvers = {
  users: (_, __, { prisma }) => {
    return prisma.user.findMany()
  },
  me: (_, __, { prisma, userId }) => {
    if (!userId) {
      throw new Error('Not authenticated')
    }
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
  },
}
