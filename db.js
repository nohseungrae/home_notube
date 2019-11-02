import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = error => {
  console.log("Connected to DB!!!");
};
const handleError = () => {
  console.log(`XXXXXX Error on DB Connection ${error}`);
};

db.once("open", handleOpen);
db.on("error", handleError);
