import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());



export default app;
