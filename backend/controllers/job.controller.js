import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      jobType,
      companyId,
      position,
      createdBy,
      applicaitons,
      experience,
      location
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !jobType ||
      !companyId ||
      !position ||
      !experience ||
      !location
    ) {
      return res.status(400).json({
        message: "something is missing...",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      companyId: companyId,
      createdBy: userId,
    });

    return res.status(200).json({
      message: "New job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query).populate({
      path:"companyId"
    });
    if (!jobs) {
      return res.status(404).json({
        messsage: "job not found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminJobs = async (req, res) => {
  const adminId = req.id;
  const jobs = await Job.find({ createdBy: adminId });

  if (!jobs) {
    return res.status(404).json({
      message: "jobs not found",
      success: false,
    });
  }

  return res.status(200).json({
    jobs,
    success: true,
  });
};
