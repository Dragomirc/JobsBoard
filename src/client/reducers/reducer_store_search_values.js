import { STORE_SEARCH_VALUES } from "../actions/types";
export default (state = {}, { type, payload }) => {
  switch (type) {
    case STORE_SEARCH_VALUES:
      return payload;
  }
  return state;
};
