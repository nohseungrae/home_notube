import passport from "passport";
import User from "./models/User";

console.log("im passport.js");
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
