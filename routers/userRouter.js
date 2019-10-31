import express from "express";
import urlRoutes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(urlRoutes.users, users);
userRouter.get(urlRoutes.userDetail, userDetail);
userRouter.get(urlRoutes.editProfile, editProfile);
userRouter.get(urlRoutes.changePassword, changePassword);
export default userRouter;