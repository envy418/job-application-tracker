/* 
make express application
attach port to it
*/

import express, { json } from "express";
import { port } from "./src/config.js";
import connectToMongodb from "./src/connecttomongodb/connectToMongodb.js";
import jobRouter from "./src/routes/jobRouter.js";

import pageNotFound from "./src/middleware/pageNotFound.js";
import errroMiddlewar from "./src/middleware/errorMiddleware.js";

import cors from "cors";
let app = express();

app.listen(port, () => {
  console.log(`applicaton is listining at port ${port}`);
  connectToMongodb();
});
app.use(cors());
app.use(json());

app.use(express.static("public"));

app.use("/job", jobRouter);

app.use("/", pageNotFound);
app.use(errroMiddlewar);
