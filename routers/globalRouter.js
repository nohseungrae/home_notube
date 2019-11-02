import express from "express";
import urlRoutes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(urlRoutes.home, home);
globalRouter.get(urlRoutes.search, search);

// User Join
globalRouter.get(urlRoutes.join, getJoin);
globalRouter.post(urlRoutes.join, postJoin);

// User Login
globalRouter.get(urlRoutes.login, getLogin);
globalRouter.post(urlRoutes.login, postLogin);

globalRouter.get(urlRoutes.logout, logout);

export default globalRouter;
