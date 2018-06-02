import { LANDED_DIRECTLY } from "../actions/types";

export default (state = false, { type, payload }) => {
  switch (type) {
    case LANDED_DIRECTLY:
      return payload;
  }
  return state;
};
