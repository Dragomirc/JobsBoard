import { combineReducers } from "redux";
import jobsReducer from "./reducer_jobs";
import storeSearchValues from "./reducer_store_search_values";
import landedDirectlyReducer from "./reducer_landed_directly";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  searchValues: storeSearchValues,
  landedDirectly: landedDirectlyReducer
});

export default rootReducer;
