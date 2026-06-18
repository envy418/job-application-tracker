import mongoose from "mongoose";
import { dbUrl } from "../config.js";

const connectToMongodb = () => {
  //connect our application to mongodb

  mongoose.connect(dbUrl);
  console.log("application is connected to database successfully ");
};
export default connectToMongodb;
