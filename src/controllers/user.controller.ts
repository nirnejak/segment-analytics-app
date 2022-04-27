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
const getUsers = async (
  req: Request<{}, {}, {}, { country: string; city: string }>,
  res: Response
) => {
  console.log(req.query.country)

  const owners = await prisma.owners.findMany({
    where: {
      email: {
        contains: ".com",
      },
    },
  })
  res.json({ users: owners })
}

/**
 * @route GET /api/user/:email
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Users
 */
const getUser = async (
  req: Request<{ email: "string" }, {}, {}, {}>,
  res: Response
) => {
  const owners = await prisma.owners.findFirst({
    where: {
      email: {
        contains: req.params.email,
      },
    },
  })
  res.json({ users: owners })
}

/**
 * @route POST /api/user/:email
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Users
 */
const createUser = async (
  req: Request<
    {},
    {},
    {
      first_name: string
      last_name: string
      full_name: string
      email: string
    },
    {}
  >,
  res: Response
) => {
  console.log(req.body.email)

  res.json({ message: "User Created" })
}

export default {
  getUsers,
  getUser,
  createUser,
}
