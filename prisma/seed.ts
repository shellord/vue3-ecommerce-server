import { PrismaClient } from '@prisma/client'

import { products } from './data'

const prisma = new PrismaClient()

const main = async () => {
  console.log('\n🗑 Deleting Products ...\n')
  await prisma.product.deleteMany({})
  console.log('🌱 Start Seeding ...\n')
  for (let product of products) {
    const data = await prisma.product.create({
      data: product,
    })
    console.log(`🎉 Created product with id: ${data.id}`)
  }
}

main()
  .then(() => {
    console.log('\n✅ Seed Successfull')
  })
  .catch((e) => {
    console.log(e)
    console.error('\n❌ Seed failed. See above.')
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
