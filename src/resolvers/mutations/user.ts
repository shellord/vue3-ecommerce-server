import { MutationResolvers } from '@/generated/graphql'
import { generateAccesToken, generateRefreshToken } from '@/lib/jwt'
import { comparePassword, hashPassword } from '@/lib/password'

export const userResolvers: MutationResolvers = {
  signup: async (_, { name, email, password }, { prisma }) => {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (existingUser) {
      throw new Error('User already exists')
    }
    const hashedPassword = await hashPassword(password)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
    const accessToken = generateAccesToken(newUser.id)
    const refreshToken = generateRefreshToken(newUser.id)
    return {
      accessToken,
      refreshToken,
    }
  },
  login: async (_, { email, password }, { prisma }) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) throw new Error('User not found')
    const isValid = await comparePassword(password, user.password)
    if (!isValid) throw new Error('Invalid password')
    const accessToken = generateAccesToken(user.id)
    const refreshToken = generateRefreshToken(user.id)
    return {
      accessToken,
      refreshToken,
    }
  },
}
