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
import { onlyPublic } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(urlRoutes.home, home);
globalRouter.get(urlRoutes.search, search);

// User Join
globalRouter.get(urlRoutes.join, onlyPublic, getJoin);
globalRouter.post(urlRoutes.join, postJoin, postLogin);

// User Login
globalRouter.get(urlRoutes.login, onlyPublic, getLogin);
globalRouter.post(urlRoutes.login, postLogin);

globalRouter.get(urlRoutes.logout, onlyPublic, logout);

export default globalRouter;
