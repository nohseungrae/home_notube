import express from "express";
import passport from "passport";
import urlRoutes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin,
  getMe,
  facebookLogin,
  postFacebookLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(urlRoutes.home, home);
globalRouter.get(urlRoutes.search, search);

// User Join
globalRouter.get(urlRoutes.join, onlyPublic, getJoin);
globalRouter.post(urlRoutes.join, postJoin, postLogin);

// User Login
globalRouter.get(urlRoutes.login, onlyPublic, getLogin);
globalRouter.post(urlRoutes.login, postLogin);

globalRouter.get(urlRoutes.logout, onlyPrivate, logout);

// Github Login/Auth
globalRouter.get(urlRoutes.github, githubLogin);
globalRouter.get(
  urlRoutes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

// Facebook Login/Auth
globalRouter.get(urlRoutes.facebook, facebookLogin);
globalRouter.get(
  urlRoutes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

globalRouter.get(urlRoutes.me, getMe);
export default globalRouter;
