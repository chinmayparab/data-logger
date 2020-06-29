import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

export const getLogs = () => {
  return async (dispatch) => {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
    });
  };
};

// set loading to truee
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
