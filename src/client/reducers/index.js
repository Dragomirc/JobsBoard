import { combineReducers } from "redux";
import jobsReducer from "./reducer_jobs";
import storeSearchValues from "./reducer_store_search_values";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  searchValues: storeSearchValues
});

export default rootReducer;
