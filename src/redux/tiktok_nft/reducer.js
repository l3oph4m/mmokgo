import { NTF_CREATED } from "./types";

const initialState = {
  nft_data: {
    auth_token: "",
    access_token: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NTF_CREATED:
      return {
        ...state,
        nft_data: action.payload,
      };

    default:
      return state;
  }
}
