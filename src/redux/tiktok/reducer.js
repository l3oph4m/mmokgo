import { UPDATE_AUTH_TOKEN } from "./types";

const initialState = {
  oauth: {
    auth_token: "",
    access_token: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AUTH_TOKEN:
      return {
        ...state,
        oauth: action.payload,
      };

    default:
      return state;
  }
}
