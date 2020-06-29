import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

export const getLogs = () => {
  return (dispatch) => {
    setLoading();
  };
};

// set loading to truee
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
