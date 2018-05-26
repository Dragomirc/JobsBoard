import { FETCH_JOBS } from "../actions/types";

export default (state = [], action) => {
  console.log(action.payload);
  const { type, payload } = action;
  switch (type) {
    case FETCH_JOBS:
      return payload;
  }
  return state;
};
