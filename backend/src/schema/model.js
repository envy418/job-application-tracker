import { model } from "mongoose";

import JobSchema from "./jobSchema.js";


export let Job = model("Job", JobSchema);

