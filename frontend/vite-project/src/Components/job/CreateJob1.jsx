import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import JobForm from "./JobForm";
import { API_URLS } from "../../config/api";

const CreateJob = () => {
  const navigate = useNavigate();

  const initialValues = {
    companyName: "",
    jobTitle: "",
    jobType: "Internship",
    status: "Applied",
    appliedDate: "",
    notes: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const result = await axios.post(API_URLS.jobs, values);

      toast.success(result.data.message);
      resetForm();
      navigate("/jobs");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  };

  return (
    <JobForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      type="create"
    />
  );
};

export default CreateJob;
