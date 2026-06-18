import expressAsyncHandler from "express-async-handler";
import { Job } from "../schema/model.js";

export const createJobController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Job.create(req.body);
    res.status(201).json({
      success: true,
      message: "job created successfully",
      result: result,
    });
  },
); 
export const getJobController = async (req, res, next) => {
  try {
    const { search, status } = req.query;

    let filter = {};

  
    if (search) {
      filter.$or = [
        { companyName: { $regex: search, $options: "i" } },
        { jobTitle: { $regex: search, $options: "i" } },
      ];
    }

  
    if (status && status !== "All") {
      filter.status = status;
    }

    const jobs = await Job.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "jobs fetched successfully",
      result: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificJobController = async (req, res, next) => {
  let result = await Job.findById(req.params.id);
  res.status(200).json({
    success: true,
    message: "job read specific successfully",
    result: result,
  });
};

export const updateSpecificJobController = async (req, res, next) => {
  let result = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: "job updated specific successfully",
    result: result,
  });
};
export const deleteSpecificJobController = async (req, res, next) => {
  let result = await Job.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "job deleted specific successfully",
    result: result,
  });
};
