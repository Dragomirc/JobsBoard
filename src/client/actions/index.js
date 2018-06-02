import axios from "axios";
import { FETCH_JOBS, STORE_SEARCH_VALUES, LANDED_DIRECTLY } from "./types";
import jobs from "./mockApiResponse";
import { API_KEY } from "../../../config.env";
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/";
//{versionnumber}/search?keywords={keywords}&loc ationName={locationName}&employerId={employerId}&distanceFromLocation={distance in miles}

export const fetchJobs = (
  {
    keywords = "",
    locationName = "",
    employerId = "",
    distanceFromLocation = ""
  },
  callback = () => {
    return;
  }
) => async dispatch => {
  callback();
  try {
    const results = await axios.request({
      url: `${BASE_URL}search?keywords=${keywords}&locationName=${locationName}&employerId=${employerId}&distanceFromLocation=${distanceFromLocation}`,
      method: "get",
      auth: {
        username: API_KEY,
        password: ""
      }
    });
    dispatch({
      type: FETCH_JOBS,
      payload: results
    });
  } catch (e) {
    console.log(e);
  }
};

export const storeSearchValues = (keywords, locationName) => dispatch => {
  dispatch({
    type: STORE_SEARCH_VALUES,
    payload: { keywords, locationName }
  });
};

export const updateNotLandedDirectly = value => dispatch => {
  dispatch({
    type: LANDED_DIRECTLY,
    payload: value
  });
};
