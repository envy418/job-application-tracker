const JOB_API_URL = import.meta.env.VITE_JOB_API_URL;

export const API_URLS = {
  jobs: JOB_API_URL,
  jobById: (id) => `${JOB_API_URL}/${id}`,
};
