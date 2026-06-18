import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URLS } from "../../config/api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const getData = async () => {
    try {
      const result = await axios.get(API_URLS.jobById(id));

      setJob(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>{job.companyName}</h2>

      <p><strong>Job Title:</strong> {job.jobTitle}</p>

      <p><strong>Job Type:</strong> {job.jobType}</p>

      <p>
        <strong>Status:</strong> {job.status}
      </p>

      <p>
        <strong>Applied Date:</strong>{" "}
        {new Date(job.appliedDate).toLocaleDateString()}
      </p>

      <p>
        <strong>Notes:</strong>{" "}
        {job.notes ? job.notes : "No notes added"}
      </p>
    </div>
  );
};

export default JobDetails;
