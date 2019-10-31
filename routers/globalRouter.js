import express from "express";
import urlRoutes from "../routes";
import { home, search } from "../controllers/videoController";
import { login, logout, join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(urlRoutes.home, home);
globalRouter.get(urlRoutes.join, search);
globalRouter.get(urlRoutes.search, join);
globalRouter.get(urlRoutes.login, login); 
globalRouter.get(urlRoutes.logout, logout);

export default globalRouter;