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
  products: async (_, { category, count }, { prisma }) => {
    let products
    if (!category) {
      products = await prisma.product.findMany({})
    }
    products = await prisma.product.findMany({
      where: {
        category: category!,
      },
    })
    if (count) {
      return products.slice(0, count)
    }
    return products
  },
  product: (_, { id }, { prisma }) => {
    return prisma.product.findUnique({
      where: {
        id,
      },
    })
  },
}
