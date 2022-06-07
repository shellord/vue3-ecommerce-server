import { PrismaClient } from '@prisma/client'

import { getUserFromToken } from '@/lib/jwt'

export type Context = {
  userId: string | null
  prisma: PrismaClient
}

const prisma = new PrismaClient()

export const createContext = async ({ req }: any) => {
  const authHeader = req.headers.authorization || ''
  const token = authHeader.split(' ')[1]
  const userId = getUserFromToken(token)
  return {
    userId,
    prisma,
  }
}
