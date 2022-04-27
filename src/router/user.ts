import { Router } from "express"

import userController from "../controllers/user.controller"

const userRouter = Router()

userRouter.get("/", userController.getUsers)
userRouter.get("/:email", userController.getUser)
userRouter.post("/", userController.createUser)

export default userRouter
