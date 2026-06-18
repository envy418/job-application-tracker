import { Schema } from "mongoose";

let JobSchema = Schema(
  {
    companyName: {
      type: String,
      required: true,
      minlength: 2,
    },

    jobTitle: {
      type: String,
      required: true,
    },

    jobType: {
      type: String,
      enum: ["Internship", "Full-time", "Part-time"],
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Applied",
        "Interviewing",
        "Offer",
        "Rejected",
      ],
      default: "Applied",
    },

    appliedDate: {
      type: Date,
      required: true,
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);
export default JobSchema;

