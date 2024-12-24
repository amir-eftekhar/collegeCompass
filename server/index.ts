import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
      }
    })

    const { password: _, ...userWithoutPassword } = user

    return res.status(201).json(userWithoutPassword)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
}) 