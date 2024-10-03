import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserByCpf,
  depositService,
  checkBalance,
  deleteUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/newUser", createUser);
userRouter.get("/allUsers", getAllUsers);
userRouter.get("/userByCpf/:cpf", getUserByCpf);
userRouter.get("/balance/:cpf", checkBalance);
userRouter.patch("/deposit/:cpf", depositService);
userRouter.delete("/deleteUser/:cpf", deleteUser);

export { userRouter };
