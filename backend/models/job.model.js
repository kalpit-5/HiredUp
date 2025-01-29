import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: [
      {
        type: String,
        required: true,
      },
    ],
    salary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applications",
      },
    ],
    experience: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", JobSchema);
