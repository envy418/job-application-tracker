import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import JobForm from "./JobForm";
import { API_URLS } from "../../config/api";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState(null);

  const getData = async () => {
    try {
      const result = await axios.get(API_URLS.jobById(id));

      const data = result.data.result;

      setInitialValues({
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        jobType: data.jobType,
        status: data.status,
        appliedDate: data.appliedDate?.split("T")[0],
        notes: data.notes || "",
      });
    } catch (error) {
      toast.error("Failed to load job");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      const result = await axios.patch(API_URLS.jobById(id), values);

      toast.success(result.data.message);
      navigate(`/job/${id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  };

  if (!initialValues) return <p>Loading...</p>;

  return (
    <JobForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      type="update"
    />
  );
};

export default UpdateJob;
