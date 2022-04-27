import { PrismaClient } from "@prisma/client"

import { Request, Response } from "express"

const prisma = new PrismaClient()

/**
 * @route GET /api/user
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Users
 */
const getUsers = async (req: Request, res: Response) => {
  const owners = await prisma.owners.findMany({
    where: {
      email: {
        contains: ".com",
      },
    },
  })
  res.json({ users: owners })
}

export default {
  getUsers,
}
