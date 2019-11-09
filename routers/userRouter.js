import express from "express";
import urlRoutes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middleware";

const userRouter = express.Router();

userRouter.get(urlRoutes.editProfile, onlyPrivate, editProfile);
userRouter.get(urlRoutes.userDetail(), onlyPrivate, userDetail);
userRouter.get(urlRoutes.changePassword, onlyPrivate, changePassword);
export default userRouter;
