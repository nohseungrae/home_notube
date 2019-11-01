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
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(localsMiddleware);

app.use(urlRoutes.home, globalRouter);
app.use(urlRoutes.users, userRouter);
app.use(urlRoutes.videos, videoRouter);

export default app;
