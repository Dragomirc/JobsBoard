import { FETCH_JOBS, STORE_SEARCH_VALUES } from "./types";
import jobs from "./mockApiResponse";

export const fetchJobs = () => {
  console.log("action call");
  return {
    type: FETCH_JOBS,
    payload: jobs
  };
};

export const storeSearchValues = (
  searchTerm,
  searchLocation,
  callback
) => dispatch => {
  dispatch({
    type: STORE_SEARCH_VALUES,
    payload: { searchTerm, searchLocation }
  });
  callback();
};
