import { FETCH_JOBS } from "./types";
import jobs from "./mockApiResponse";

export const fetchJobs = () => {
  return {
    type: FETCH_JOBS,
    payload: jobs
  };
};
