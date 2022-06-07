import { MutationResolvers } from '@/generated/graphql'

export const cartResolvers: MutationResolvers = {
  addToCart: async (_, { productId }, { userId, prisma }) => {
    //check if user is logged in
    if (!userId) {
      throw new Error('Not authenticated')
    }

    //check if product exists
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    })
    if (!product) throw new Error('Product not found')

    //check if product is already in cart
    const cartItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })
    if (cartItem) {
      const existingCartItem = await prisma.cartItem.update({
        where: {
          userId_productId: {
            userId,
            productId,
          },
        },
        data: {
          quantity: cartItem.quantity + 1,
        },
        include: {
          product: true,
        },
      })
      return existingCartItem
    }

    //if not, create new cart item
    const newCartItem = await prisma.cartItem.create({
      data: {
        quantity: 1,
        userId,
        productId,
      },
      include: {
        product: true,
      },
    })
    return newCartItem
  },
  removeFromCart: async (_, { productId }, { userId, prisma }) => {
    if (!userId) {
      throw new Error('Not authenticated')
    }
    const cartItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })

    if (cartItem?.quantity === 1) {
      await prisma.cartItem.delete({
        where: {
          userId_productId: {
            userId,
            productId,
          },
        },
      })
      return true
    }

    await prisma.cartItem.update({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      data: {
        quantity: { decrement: 1 },
      },
    })
    return true
  },
  deleteCartItem: async (_, { productId }, { userId, prisma }) => {
    if (!userId) {
      throw new Error('Not authenticated')
    }
    await prisma.cartItem.delete({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })
    return true
  },
}
