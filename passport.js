import passport from "passport";
import GithubStrategy from "passport-github";
import dotenv from "dotenv";
import User from "./models/User";
import urlRoutes from "./routes";
import { githubLoginCallback } from "./controllers/userController";

dotenv.config();

console.log("im passport.js");
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${urlRoutes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
