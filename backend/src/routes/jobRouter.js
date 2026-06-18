import { Router } from "express";
import { Job } from "../schema/model.js";
import {
  createJobController,
  deleteSpecificJobController,
  getJobController,
  readSpecificJobController,
  updateSpecificJobController,
} from "../controller/jobcontroller.js";

const jobRouter = Router();
jobRouter.route("/").post(createJobController).get(getJobController);
jobRouter
  .route("/:id")
  .get(readSpecificJobController)
  .patch(updateSpecificJobController)
  .delete(deleteSpecificJobController);

export default jobRouter;
