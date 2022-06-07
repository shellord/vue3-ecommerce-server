import jwt from 'jsonwebtoken'

export const generateAccesToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '15d',
  })
}

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: '30d',
  })
}

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!)
}

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
}

export const getUserFromToken = (token: string): string | null => {
  try {
    const { userId } = verifyAccessToken(token) as { userId: string }
    return userId
  } catch (error) {
    return null
  }
}
