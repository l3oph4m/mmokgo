import { NTF_CREATED } from "./types";

export const createNFT = function (nft_data) {
  return (dispatch) => {
    dispatch({
      type: NTF_CREATED,
      payload: nft_data,
    });
  };
};
