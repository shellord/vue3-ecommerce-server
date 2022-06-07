import { MutationResolvers } from '@/generated/graphql'

export const orderResolvers: MutationResolvers = {
  createOrder: async (_, __, { userId, prisma }) => {
    if (!userId) {
      throw new Error('Not authenticated')
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
    if (!cart.length) {
      throw new Error('Cart is empty')
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new Error('User not found')
    }

    cart.map(async (cartItem) => {
      await prisma.orderItem.create({
        data: {
          userId,
          quantity: cartItem.quantity,
          productId: cartItem.productId,
        },
      })
      await prisma.cartItem.delete({
        where: {
          userId_productId: {
            userId,
            productId: cartItem.productId,
          },
        },
      })
    })

    const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0)

    const totalPrice = cart.reduce(
      (acc, cur) => acc + cur.quantity * cur.product.price,
      0
    )

    return {
      totalQuantity,
      totalPrice,
      user: user,
      cartItems: cart,
    }
  },
}
