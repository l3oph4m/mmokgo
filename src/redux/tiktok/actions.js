import { UPDATE_AUTH_TOKEN } from "./types";

export const updateAuthToken = function (oauth) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AUTH_TOKEN,
      payload: oauth,
    });
  };
};
