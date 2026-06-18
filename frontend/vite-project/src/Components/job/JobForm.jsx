import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API_URLS } from "../../config/api";

const JobForm = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    companyName: "",
    jobTitle: "",
    jobType: "Internship",
    status: "Applied",
    appliedDate: "",
    notes: "",
  });

  // GET DATA FOR UPDATE
  const getData = async () => {
    try {
      const result = await axios.get(API_URLS.jobById(id));

      const data = result.data.result;

      setInitialValues({
        companyName: data.companyName,
        jobTitle: data.jobTitle, 
        jobType: data.jobType ,
        status: data.status ,
        appliedDate: data.appliedDate?.split("T")[0],
        notes: data.notes,
      });
    } catch (error) {
      toast.error("Failed to load job");
    }
  };

  useEffect(() => {
    if (type === "update") {
      getData();
    }
  }, [type, id]);

  // VALIDATION SCHEMA
  const validationSchema = Yup.object({
    companyName: Yup.string()
      .min(2, "Too short")
      .required("Company name is required"),

    jobTitle: Yup.string().required("Job title is required"),

    jobType: Yup.string()
      .oneOf(["Internship", "Full-time", "Part-time"])
      .required(),

    status: Yup.string()
      .oneOf(["Applied", "Interviewing", "Offer", "Rejected"])
      .required(),

    appliedDate: Yup.date().required("Applied date is required"),

    notes: Yup.string(),
  });

  // FORMIC
  const formik = useFormik({
    enableReinitialize: true, 
    initialValues,
    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        if (type === "update") {
          const result = await axios.patch(API_URLS.jobById(id), values);

          toast.success(result.data.message);
          navigate(`/job/${id}`);
        } else {
          const result = await axios.post(API_URLS.jobs, values);

          toast.success(result.data.message);
          resetForm();
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Something went wrong"
        );
      }
    },
  });

  return (
   <form className="job-form" onSubmit={formik.handleSubmit}>

  {/* COMPANY NAME */}
  <div className="form-field">
    <label>Company Name:</label>
    <input
      name="companyName"
      placeholder="Enter company name"
      value={formik.values.companyName}
      onChange={formik.handleChange}
    />
    {formik.touched.companyName && formik.errors.companyName && (
      <p style={{ color: "red" }}>{formik.errors.companyName}</p>
    )}
  </div>

  {/* JOB TITLE */}
  <div className="form-field">
    <label>Job Title:</label>
    <input
      name="jobTitle"
      placeholder="Enter job title"
      value={formik.values.jobTitle}
      onChange={formik.handleChange}
    />
    {formik.touched.jobTitle && formik.errors.jobTitle && (
      <p style={{ color: "red" }}>{formik.errors.jobTitle}</p>
    )}
  </div>

  {/* JOB TYPE */}
  <div className="form-field">
    <label>Job Type:</label>
    <select
      name="jobType"
      value={formik.values.jobType}
      onChange={formik.handleChange}
    >
      <option value="Internship">Internship</option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option>
    </select>
  </div>

  {/* STATUS */}
  <div className="form-field">
    <label>Status:</label>
    <select
      name="status"
      value={formik.values.status}
      onChange={formik.handleChange}
    >
      <option value="Applied">Applied</option>
      <option value="Interviewing">Interviewing</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  </div>

  {/* APPLIED DATE */}
  <div className="form-field">
    <label>Applied Date:</label>
    <input
      type="date"
      name="appliedDate"
      value={formik.values.appliedDate}
      onChange={formik.handleChange}
    />
    {formik.touched.appliedDate && formik.errors.appliedDate && (
      <p style={{ color: "red" }}>{formik.errors.appliedDate}</p>
    )}
  </div>

  {/* NOTES */}
  <div className="form-field form-field-full">
    <label>Notes:</label>
    <textarea
      name="notes"
      placeholder="Add notes..."
      value={formik.values.notes}
      onChange={formik.handleChange}
    />
  </div>

  {/* BUTTON */}
  <div className="form-actions">
    <button type="submit">
      {type === "create" ? "Create Job" : "Update Job"}
    </button>
  </div>

</form>
  );
};

export default JobForm;
