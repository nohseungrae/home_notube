import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import urlRoutes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middleware";
import mongoose from "mongoose";
import mongoStore from "connect-mongo";
import passport from "passport";
import "./passport";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.COOKIE_SECRET);

const app = express();

const CokieStore = mongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(urlRoutes.home, globalRouter);
app.use(urlRoutes.users, userRouter);
app.use(urlRoutes.videos, videoRouter);

export default app;
