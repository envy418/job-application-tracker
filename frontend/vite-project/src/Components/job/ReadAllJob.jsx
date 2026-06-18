import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { API_URLS } from "../../config/api";
const ReadAllJob = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("All");
  
const getData = async (searchText = "", statusFilter = "All") => {
  try {
    const result = await axios.get(API_URLS.jobs, {
      params: {
        search: searchText,
        status: statusFilter,
      },
    });

    setJobs(result.data.result);
  } catch (error) {
    toast.error("Failed to fetch jobs");
  }
};


useEffect(() => {
  getData("", "All");
}, []);

const handleStatusChange = (e) => {
  const value = e.target.value;
  setStatus(value);
  getData(search, value);
};
const handleSearch = (e) => {
  const value = e.target.value;
  setSearch(value);
  getData(value, status);
};
  const handleView = (id) => () => {
    navigate(`/job/${id}`);
  };

  const handleEdit = (id) => () => {
    navigate(`/job/update/${id}`);
  };

  const handleDelete = (id) => async () => {
   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
   const  result = await axios({
          url: API_URLS.jobById(id),
          method:"delete"
        })
        toast.success(result.data.message)
        getData()
  }
});
  };

  return (
    <>
      <div className="job-toolbar">
        <input
          type="text"
          placeholder="Search by company or job title..."
          value={search}
          onChange={handleSearch}
        />
        <div className="filter-control">
          <label htmlFor="status-filter">Filter by Status</label>

          <select
            id="status-filter"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      <div className="job-grid">
      {jobs.map((job) => (
        
        <div key={job._id} className="card">
        
          <p><strong>Company:</strong> {job.companyName}</p>
          <p><strong>Title:</strong> {job.jobTitle}</p>
          <p><strong>Type:</strong> {job.jobType}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p>
            <strong>Applied:</strong>{" "}
            {new Date(job.appliedDate).toLocaleDateString()}
          </p>

          {job.notes && <p><strong>Notes:</strong> {job.notes}</p>}

          <div className="card-actions">
            <button onClick={handleView(job.id)}>View</button>
            <button onClick={handleEdit(job.id)}>Edit</button>
            <button onClick={handleDelete(job.id)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default ReadAllJob;
