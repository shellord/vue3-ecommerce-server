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
  cart: async (_, __, { prisma, userId }) => {
    if (!userId) {
      throw new Error('Not authenticated')
    }
    //current user
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }
    const cart = await prisma.cartItem.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
        user: true,
      },
    })

    return {
      totalQuantity: cart.reduce((acc, cur) => acc + cur.quantity, 0),
      totalPrice: cart.reduce(
        (acc, cur) => acc + cur.quantity * cur.product.price,
        0
      ),
      user: user,
      cartItems: cart,
    }
  },
}
