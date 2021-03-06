import { PrismaClient } from '@prisma/client'

import { products } from './data'

const prisma = new PrismaClient()

const main = async () => {
  console.log('\nš Deleting Carts ...')
  await prisma.cartItem.deleteMany({})
  console.log('\nš Deleting Orders ...')
  await prisma.orderItem.deleteMany({})
  console.log('\nš Deleting Users ...')
  await prisma.user.deleteMany({})
  console.log('\nš Deleting Products ...\n')
  await prisma.product.deleteMany({})
  console.log('š± Start Seeding ...\n')
  for (let product of products) {
    const data = await prisma.product.create({
      data: product,
    })
    console.log(`š Created product with id: ${data.id}`)
  }
}

main()
  .then(() => {
    console.log('\nā Seed Successfull')
  })
  .catch((e) => {
    console.log(e)
    console.error('\nā Seed failed. See above.')
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
